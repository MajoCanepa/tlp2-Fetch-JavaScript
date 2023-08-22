const reseña = {
    titulo: "Cómo Matar a un Ruiseñor",
    cuerpo: "La novela clásica de Harper Lee aborda cuestiones de raza, justicia y moral en la América sureña de la década de 1930. Narrada desde la perspectiva de Scout Finch, una niña inteligente y observadora, la historia sigue a su padre, Atticus Finch, mientras defiende a un hombre negro acusado injustamente de violación. A través de los ojos de Scout, los lectores exploran temas de prejuicio, tolerancia y la pérdida de la inocencia. La voz auténtica de Scout y los personajes memorables hacen que esta novela sea un viaje conmovedor y reflexivo en el que se cuestionan las normas sociales y se exploran los valores humanos."
};

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(reseña)
})
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
        console.error('Error', error);
    });
