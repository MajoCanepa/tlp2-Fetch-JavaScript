const imagen = document.getElementById('imagen');

fetch('https://cors-anywhere.herokuapp.com/https://via.placeholder.com/150')
  .then(response => {
    if (response.ok) {
      return response.blob();
    } else {
      throw new Error('Error al descargar la imagen');
    }
  })
  .then(imageBlob => {
    const imagenURL = URL.createObjectURL(imageBlob);
    imagen.src = imagenURL;
  })
  .catch(error => {
    console.error('Error:', error);
    imagen.alt = 'Error al cargar la imagen';
  });