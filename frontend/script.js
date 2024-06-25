document.getElementById('scrape-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const url = document.getElementById('url').value;
    const template = document.getElementById('template').value;

    const response = await fetch('http://localhost:5000/scrape', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url, template })
    });
    const result = await response.json();
    document.getElementById('result').innerText = result.rewritten_content;
});
