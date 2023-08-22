fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response => Response.json())
    .then(data => {
        const primerosElementos = data.slice(0, 3);
        console.log(primerosElementos);
    })
    .catch(error => {
        console.error('Error', error);
    });