import csv
import os
from flask import Flask, request, jsonify
from llama_cpp import Llama  # Make sure llama_cpp is installed and available

app = Flask(__name__)

# Adjust the model path depending on where it's located on Render
MODEL_PATH = "llama.cpp/models/mistral-7b-instruct-v0.1.Q5_K_M.gguf"
CSV_PATH = os.path.join(os.path.dirname(__file__), 'project_metadata.csv')

# Initialize the model (optional if model is not deployed in Render)
try:
    llm = Llama(model_path=MODEL_PATH, n_ctx=2048, verbose=False)
except Exception as e:
    llm = None
    print("⚠️ Warning: LLaMA model not loaded -", e)

def load_project_data():
    summaries = []
    with open(CSV_PATH, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            title = row.get("title", "Unknown")
            oa = int(row.get("open_access_count", 0))
            total = int(row.get("publication_count", 1))
            ratio = round((oa / total) * 100, 1) if total else 0.0
            summaries.append(f"{title} | Publications: {total} | Open Access: {oa} ({ratio}%)")
    return "\n".join(summaries)

def query_llama(question: str):
    project_knowledge = load_project_data()

    prompt = f"""
Below is data from several DH projects, showing how many of their publications are open access.

Please analyze this data and answer the following question.

Projects:
{project_knowledge}

Question: {question}
Respond only with the project title and open access percentage.
"""
    if not llm:
        return "⚠️ LLaMA model is not available on this deployment."
    
    output = llm(prompt, max_tokens=300)
    return output["choices"][0]["text"].strip()

@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    user_input = request.json.get('query', '')
    if not user_input:
        return jsonify({"error": "No query provided"}), 400

    try:
        response = query_llama(user_input)
        return jsonify({"answer": response})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=8000)
