document.getElementById('scrape-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const url = document.getElementById('url').value;
    const template = document.getElementById('template').value;

    const response = await fetch('https://improved-space-broccoli-556vpxv7pp7fp66j-5000.app.github.dev/scrape', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url, template })
    });
    const result = await response.json();
    document.getElementById('result').innerText = result.rewritten_content;
});
