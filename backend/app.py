from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import requests
from bs4 import BeautifulSoup
import openai

app = Flask(__name__)
CORS(app)

openai.api_key = os.getenv('OPENAI_API_KEY')

@app.route('/scrape', methods=['POST'])
def scrape():
    data = request.get_json()
    url = data.get('url')
    template = data.get('template')

    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Example: Scraping the title
    title = soup.find('title').get_text()

    # Use OpenAI to rewrite content
    openai_response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=f"Rewrite this content for template {template}: {title}",
        max_tokens=150
    )
    rewritten_content = openai_response.choices[0].text.strip()

    result = {"rewritten_content": rewritten_content}
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
