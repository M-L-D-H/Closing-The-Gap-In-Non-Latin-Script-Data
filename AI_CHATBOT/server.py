import csv
from flask import Flask, request, jsonify

app = Flask(__name__)

CSV_PATH = "/Users/jous00/WorkـCtG/Closing-The-Gap-In-Non-Latin-Script-Data/AI_CHATBOT/project_metadata.csv"

def load_data():
    projects = []
    with open(CSV_PATH, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            try:
                row['open_access_ratio'] = float(row.get('open_access_ratio', 0))
                projects.append(row)
            except Exception as e:
                print(f"Error in row: {row} – {e}")
    return projects

def answer_question(query):
    projects = load_data()

    # Example: Find project with highest open access
    if "best open access" in query.lower():
        best = max(projects, key=lambda p: p['open_access_ratio'])
        return f"Best Open Access Project: {best['title']} ({best['open_access_ratio']}%)"

    # Add more simple logic/rules here
    return "Sorry, I can't answer that yet. Try asking about open access."

@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    user_input = request.json.get('query', '')
    if not user_input:
        return jsonify({"error": "No query provided"}), 400

    try:
        response = answer_question(user_input)
        return jsonify({"answer": response})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=8000)
