document.getElementById('registration-form').addEventListener('submit', async (e) => {
    e.preventDefault();  // Impedisce il ricaricamento della pagina
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Invia i dati alla funzione Netlify
    const response = await fetch('/.netlify/functions/register', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const result = await response.json();
    alert(result.message);
});
