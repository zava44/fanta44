document.getElementById('registration-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
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
