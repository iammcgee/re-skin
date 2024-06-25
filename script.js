document.getElementById('url-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const url = document.getElementById('url-input').value;
    const response = await fetch('https://6c1b9a10-e27f-48af-ac45-818fae3fa7c4-00-1ko592lhcdbl8.riker.replit.dev/', {
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
