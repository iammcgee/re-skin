document.getElementById('url-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const url = document.getElementById('url-input').value;
    const response = await fetch('https://your-repl-it-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
    });
    const data = await response.json();
    document.getElementById('rewritten-content').textContent = data.rewrittenContent;
    document.getElementById('output').style.display = 'block';
});
