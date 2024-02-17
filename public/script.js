const idImage = document.getElementById('random-image')

function loadRandomImage() {
  fetch('/img-gen')
    .then(response => response.json())
    .then(data => {
        idImage.src = data.imageUrl
    })
    .catch(error => console.log(error))
}
