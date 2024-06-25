document.getElementById('scraperForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const url = document.getElementById('url').value;
    const template = document.getElementById('template').value;

    // Step 1: Fetch the content of the landing page
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
    const data = await response.json();
    const htmlContent = data.contents;

    // Step 2: Extract the main content from the HTML (simple example)
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const mainContent = doc.querySelector('body').innerText;

    // Step 3: Use OpenAI API to rewrite the content
    const openaiApiKey = 'OPENAI_API_KEY';
    const prompt = `${template}\n\n${mainContent}`;

    const result = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openaiApiKey}`
        },
        body: JSON.stringify({
            prompt: prompt,
            max_tokens: 1500
        })
    });

    const resultData = await result.json();
    const rewrittenContent = resultData.choices[0].text;

    // Step 4: Display the rewritten content
    document.getElementById('result').innerText = rewrittenContent;
});
