document.getElementById('scrape-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const url = document.getElementById('url').value;
    const template = document.getElementById('template').value;

    console.log('Form submitted:', { url, template });

    try {
        const response = await fetch('https://bug-free-space-umbrella-6w6v74vqg9j2xq6-5000.app.github.dev/scrape', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url, template })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Response:', result);
        document.getElementById('result').innerText = result.rewritten_content;
    } catch (error) {
        console.error('Error:', error);
    }
});


