// Obtiene todos los elementos de anclaje (enlaces) del menú
const menuItems = document.querySelectorAll("nav a");

// Agrega un controlador de eventos para manejar el clic en los elementos del menú
menuItems.forEach(item => {
    item.addEventListener("click", function (event) {
        // Elimina la clase "selected" de todos los elementos del menú
        menuItems.forEach(item => {
            item.classList.remove("selected");
        });
        
        // Agrega la clase "selected" al elemento del menú clicado
        this.classList.add("selected");
    });
});

// Abre el carrousel al hacer clic en una imagen
const imageItems = document.querySelectorAll('.image-item');
const carrousel = document.querySelector('.carrousel');

imageItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        openCarrousel(index);
    });
});

// Cierra el carrousel
carrousel.addEventListener('click', () => {
    closeCarrousel();
});

// Abre el carrousel con la imagen seleccionada
function openCarrousel(index) {
    const carrouselImage = document.querySelector('.carrousel-image');
    const carrouselInfo = document.querySelector('.carrousel-info');
    const images = document.querySelectorAll('.image-item img');
    const titles = document.querySelectorAll('.image-info h2');
    const descriptions = document.querySelectorAll('.image-info p');

    carrouselImage.src = images[index].src;
    carrouselInfo.innerHTML = `<h2>${titles[index].textContent}</h2><p>${descriptions[index].textContent}</p>`;
    carrousel.style.display = 'block';
}

// Cierra el carrousel
function closeCarrousel() {
    carrousel.style.display = 'none';
}



// Agrega funcionalidad para mostrar/ocultar la respuesta al hacer clic en la pregunta
const question = document.querySelector('.question');
const answer = document.querySelector('.answer');

question.addEventListener('click', () => {
    answer.classList.toggle('active');
});


