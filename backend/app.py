import requests
from bs4 import BeautifulSoup

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/scrape', methods=['POST'])
def scrape():
    data = request.get_json()
    url = data.get('url')
    template = data.get('template')
    
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Example: Scraping the title
    title = soup.find('title').get_text()
    
    # Placeholder for rewriting logic
    rewritten_content = f"Rewritten content for {template} with title: {title}"
    
    result = {"rewritten_content": rewritten_content}
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
