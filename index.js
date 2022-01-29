const h1 = document.getElementById('quote');
const div = document.querySelector('.tags');
url = 'https://quotes15.p.rapidapi.com/quotes/random/';


fetch(url, {
    method: 'GET',
    headers: {
        'x-rapidapi-host': 'quotes15.p.rapidapi.com',
        'x-rapidapi-key': '8923a54497msh4015df3814afd0cp1c6ab1jsn6cc39eee125e'
    }
}).then(response => response.json())
.then(data => {
    h1.textContent = data.content;
})