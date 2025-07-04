import csv
import os
from flask import Flask, request, jsonify
from llama_cpp import Llama  # Make sure llama_cpp is installed and available
import re
import string
import difflib

app = Flask(__name__)

MODEL_PATH = "/Users/jous00/WorkـCtG/Closing-The-Gap-In-Non-Latin-Script-Data/AI_CHATBOT/llama.cpp/models/mistral-7b-instruct-v0.1.Q5_K_M.gguf"
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
CSV_PATH = os.path.join(BASE_DIR, 'project_metadata.csv')

# Initialize the model
try:
    llm = Llama(model_path=MODEL_PATH, n_ctx=5890, verbose=False)
except Exception as e:
    llm = None
    print("Warning: LLaMA model not loaded -", e)

def load_project_data_as_tsv():
    tsv_lines = ["title\tpublication_count\topen_access_count\topen_access_ratio"]
    
    with open(CSV_PATH, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            title = row.get("title", "Unknown")
            oa = int(float(row.get("open_access_count", 0)))
            total = int(float(row.get("publication_count", 1)))
            ratio = round((oa / total) * 100, 1) if total else 0.0
            tsv_lines.append(f"{title}\t{total}\t{oa}\t{ratio}%")
    
    return "\n".join(tsv_lines)

def normalize(text):
    text = text.replace("–", "-")  
    return ''.join(c for c in text.lower() if c not in string.punctuation).strip()

def find_project_row(project_title, csv_data):
    norm_title = normalize(project_title)
    titles = [normalize(row.get('title', '')) for row in csv_data]
    # Find closest match
    closest = difflib.get_close_matches(norm_title, titles, n=1, cutoff=0.9)
    if closest:
        for row in csv_data:
            if normalize(row.get('title', '')) == closest[0]:
                return row
    return None

def extract_project_name(question: str) -> str:
    # 1. Check for quoted project name
    match = re.search(r'project\s+"([^"]+)"', question, re.IGNORECASE)
    if match:
        return match.group(1).strip()
    
    # 2. Capture everything after "project" up to the end
    match = re.search(r'project\s+(.+)', question, re.IGNORECASE)
    if match:
        raw = match.group(1).strip()
        # Remove trailing verbs or common sentence endings
        cleaned = re.sub(r'\b(have|has|contain|with|and)\b.*$', '', raw, flags=re.IGNORECASE)
        return cleaned.strip()
    
    return ""

def compare_binary_fields(row1, row2, field, label):
    val1 = interpret_binary_value(row1.get(field, "0"))
    val2 = interpret_binary_value(row2.get(field, "0"))
    return f"{label}:\n- {row1['title']}: {val1}\n- {row2['title']}: {val2}\n"

def safe_ratio(oa, total):
    return round((oa / total) * 100, 1) if total > 0 else 0

def interpret_binary_value(value: str) -> str:
    try:
        val = float(value)
        if val == 1.0:
            return "Yes"
        elif val == 0.5:
            return "Partially"
        elif val == 0.0:
            return "No"
    except:
        pass
    return "Unknown"

def query_llama_or_csv(question: str):
    question_lower = question.lower().strip()

    # Smart filter for simple/redundant questions
    simple_patterns = [
        r"how many projects use github",
        r"how many projects have webhosting",
        r"how many projects have open access",
        r"number of .*projects.*github",
        r"number of .*projects.*webhosting",
        r"how many.*projects.*accessible",
    ]

    for pattern in simple_patterns:
        if re.search(pattern, question_lower):
            return (
                "I'm too smart to answer that – this information is already visualized! "
                "Please refer to the chart for the answer."
            )

    if "compare" in question_lower and "between" in question_lower:
        match = re.search(r'between (.*?) and (.*)', question, re.IGNORECASE)
        if match:
            proj1 = match.group(1).strip().strip("'\"")
            proj2 = match.group(2).strip().strip("'\"")
            with open(CSV_PATH, newline='', encoding='utf-8') as csvfile:
                reader = list(csv.DictReader(csvfile))
                row1 = find_project_row(proj1, reader)
                row2 = find_project_row(proj2, reader)

            if row1 and row2:
                output = f"Comparison between '{row1['title']}' and '{row2['title']}':\n\n"

                # Publications
                try:
                    pubs1 = int(float(row1.get("publication_count", 0)))
                    pubs2 = int(float(row2.get("publication_count", 0)))
                    output += f"Publications:\n- {row1['title']}: {pubs1}\n- {row2['title']}: {pubs2}\n\n"
                except:
                    pass

                # Open Access
                try:
                    oa1 = safe_ratio(int(float(row1["open_access_count"]), int(row1["publication_count"])))
                    oa2 = safe_ratio(int(float(row2["open_access_count"]), int(row2["publication_count"])))
                    output += f"Open Access Ratio:\n- {row1['title']}: {oa1}%\n- {row2['title']}: {oa2}%\n\n"
                except:
                    pass

                # GitHub, Data Accessibility, Webhosting
                output += compare_binary_fields(row1, row2, "Github", "🧬 GitHub")
                output += compare_binary_fields(row1, row2, "data_accessibility", "📂 Data Accessibility")
                output += compare_binary_fields(row1, row2, "webhosting", "🌐 Web Hosting")

                return output.strip()
            else:
                return "One or both projects not found. Please check the names."


    if "list" in question_lower and "github" in question_lower:
        matches = []
        with open(CSV_PATH, newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                if float(row.get("Github", 0)) == 1.0:
                    matches.append(row["title"])
        if matches:
            return "📂 Projects with GitHub:\n" + "\n".join(sorted(matches))
        else:
            return "No projects with GitHub found."

    if "list" in question_lower and "data accessibility" in question_lower:
        status = "full"
        if "partial" in question_lower:
            status = "partial"
        elif "no" in question_lower or "without" in question_lower:
            status = "none"

        matches = []
        with open(CSV_PATH, newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                val = float(row.get("data_accessibility", 0))
                if (status == "full" and val == 1.0) or \
                   (status == "partial" and val == 0.5) or \
                   (status == "none" and val == 0.0):
                    matches.append(row["title"])
        if matches:
            return f"Projects with {status} data accessibility:\n" + "\n".join(sorted(matches))
        else:
            return f"No projects with {status} data accessibility found."

    if "list" in question_lower and "web hosting" in question_lower:
        matches = []
        with open(CSV_PATH, newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                if float(row.get("webhosting", 0)) == 1.0:
                    matches.append(row["title"])
        if matches:
            return "Projects with their own web hosting:\n" + "\n".join(sorted(matches))
        else:
            return "No projects with self-hosted websites found."


    #List projects
    if ("list" in question_lower or "show" in question_lower or "which" in question_lower) and "project" in question_lower:
        with open(CSV_PATH, newline='', encoding='utf-8') as csvfile:
            reader = list(csv.DictReader(csvfile))
            sorted_rows = sorted(reader, key=lambda r: r.get("title", ""))
            count = len(sorted_rows)
            return (
                f"There are {count} projects:\n" +
                "\n".join(f"- {row['title']} (Publications: {row['publication_count']}, OA: {row['open_access_count']})" for row in sorted_rows)
            )


    # Check for open access ratio queries with numeric threshold
    ratio_match = re.search(r'open access ratio (?:of|equal to|=)?\s*(\d{1,3})%', question_lower)
    if ratio_match:
        threshold = int(float(ratio_match.group(1)))
        with open(CSV_PATH, newline='', encoding='utf-8') as csvfile:
            reader = list(csv.DictReader(csvfile))
            matching_projects = []
            for row in reader:
                oa = int(float(row.get("open_access_count", 0)))
                total = int(float(row.get("publication_count", 1)))
                ratio = (oa / total) * 100 if total else 0
                if ratio == threshold:
                    matching_projects.append(row['title'])
            count = len(matching_projects)
            if count == 0:
                return f"No projects have an open access ratio of {threshold}%."
            else:
                return f"There are {count} project(s) with an open access ratio of {threshold}%:\n" + "\n".join(matching_projects)

    # If your question uses "greater than" or "above" in open access ratio
    ratio_gt_match = re.search(r'open access ratio (?:greater than|above|>)\s*(\d{1,3})%', question_lower)
    if ratio_gt_match:
        threshold = int(float(ratio_gt_match.group(1)))
        with open(CSV_PATH, newline='', encoding='utf-8') as csvfile:
            reader = list(csv.DictReader(csvfile))
            matching_projects = []
            for row in reader:
                oa = int(float(row.get("open_access_count", 0)))
                total = int(float(row.get("publication_count", 1)))
                ratio = (oa / total) * 100 if total else 0
                if ratio > threshold:
                    matching_projects.append(row['title'])
            count = len(matching_projects)
            if count == 0:
                return f"No projects have an open access ratio greater than {threshold}%."
            else:
                return f"There are {count} project(s) with an open access ratio greater than {threshold}%:\n" + "\n".join(matching_projects)

    if "how many publications" in question_lower:
        project_name = extract_project_name(question)
        with open(CSV_PATH, newline='', encoding='utf-8') as csvfile:
            reader = list(csv.DictReader(csvfile))
            row = find_project_row(project_name, reader)
        if row:
            return f"Project '{row['title']}' has {row['publication_count']} publications."
        else:
            return f"Project '{project_name}' not found."

    if "most publications" in question_lower:
        with open(CSV_PATH, newline='', encoding='utf-8') as csvfile:
            reader = list(csv.DictReader(csvfile))
            max_pub = 0
            best_project = None
            for row in reader:
                total = int(float(row.get("publication_count", 0)))
                if total > max_pub:
                    max_pub = total
                    best_project = row
            if best_project:
                return f"Project '{best_project['title']}' has the most publications: {max_pub}."

    if "highest open access ratio" in question_lower:
        with open(CSV_PATH, newline='', encoding='utf-8') as csvfile:
            reader = list(csv.DictReader(csvfile))
            best_ratio = 0
            best_project = None
            for row in reader:
                oa = int(float(row.get("open_access_count", 0)))
                total = int(float(row.get("publication_count", 1)))
                ratio = (oa / total) * 100 if total else 0
                if ratio > best_ratio:
                    best_ratio = ratio
                    best_project = row
            if best_project:
                return f"Project '{best_project['title']}' has the highest open access ratio: {round(best_ratio, 1)}%."


    if "compare" in question_lower and "between" in question_lower:
        match = re.search(r'between (.*?) and (.*)', question, re.IGNORECASE)
        if match:
            proj1 = match.group(1).strip()
            proj2 = match.group(2).strip()
        with open(CSV_PATH, newline='', encoding='utf-8') as csvfile:
            reader = list(csv.DictReader(csvfile))
            row1 = find_project_row(proj1, reader)
            row2 = find_project_row(proj2, reader)
            if row1 and row2:
                ratio1 = safe_ratio(int(float(row1["open_access_count"])), int(float(row1["publication_count"])))
                ratio2 = safe_ratio(int(float(row2["open_access_count"])), int(float(row2["publication_count"])))
                return (
                    f"{row1['title']}: {ratio1}% open access.\n"
                    f"{row2['title']}: {ratio2}% open access."
                )
            else:
                return "One or both projects not found. Please check the names."


    if "open access ratio" in question_lower:
        project_name = extract_project_name(question)
        with open(CSV_PATH, newline='', encoding='utf-8') as csvfile:
            reader = list(csv.DictReader(csvfile))
            row = find_project_row(project_name, reader)
        if row:
            ratio = round((int(float(row["open_access_count"])) / int(float(row["publication_count"]))) * 100, 1)
            return f"Project '{row['title']}' has an open access ratio of {ratio}%."
        else:
            return f"Project '{project_name}' not found."

    if "list" in question_lower and "open access" in question_lower and ">" in question_lower:
        threshold = 50
        matches = []
        with open(CSV_PATH, newline='', encoding='utf-8') as csvfile:
            reader = list(csv.DictReader(csvfile))
            for row in reader:
                oa = int(float(row.get("open_access_count", 0)))
                total = int(float(row.get("publication_count", 1)))
                ratio = (oa / total) * 100 if total else 0
                if ratio > threshold:
                    matches.append(f"{row['title']} ({round(ratio, 1)}%)")
        if matches:
            return "Projects with open access > 50%:\n" + "\n".join(matches)
        else:
            return "No projects found with open access ratio above 50%."

    # fallback to LLM
    return query_llama(question)


def load_project_data(limit=10):
    summaries = []
    with open(CSV_PATH, newline='', encoding='utf-8') as csvfile:
        reader = list(csv.DictReader(csvfile))
        for i, row in enumerate(reader):
            if i >= limit:
                break
            title = row.get("title", "Unknown")
            oa = int(float(row.get("open_access_count", 0)))
            total = int(float(row.get("publication_count", 1)))
            ratio = round((oa / total) * 100, 1) if total else 0.0
            summaries.append(f"{title} | Publications: {total} | Open Access: {oa} ({ratio}%)")
    return "\n".join(summaries)
    
def query_llama(question: str):
    project_data_tsv = load_project_data_as_tsv()
    
    prompt = f"""
Below is a list of Digital Humanities projects and their publication data, formatted as TSV (tab-separated values).

Each row contains:
uuid,title,category,maintained,interviewed,start_year,language,project_website,Github,data_accessibility,webhosting,open_access_count,publication_count. The open access ration should be calculated. 

{project_data_tsv}

Question: {question}
Please answer in a factual, data-based manner.
"""
    if not llm:
        return "LLaMA model is not available on this deployment."
    
    output = llm(prompt, max_tokens=800)
    return output["choices"][0]["text"].strip()


@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    user_input = request.json.get('query', '')
    if not user_input:
        return jsonify({"error": "No query provided"}), 400

    try:
        response = query_llama_or_csv(user_input)
        return jsonify({"answer": response})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=8000)