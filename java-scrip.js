

// buscador

document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton"); 
    const searchInput = document.getElementById("searchInput"); // Campo de entrada de búsqueda

    searchButton.addEventListener("click", function () {
        // Alterna la clase "active" en el campo de búsqueda 
        searchInput.classList.toggle("active");
        
        // Si el campo de búsqueda está activo, establece el foco en él
        if (searchInput.classList.contains("active")) {
            searchInput.focus();
        }
    });
});


// header-2 estatico

window.addEventListener('scroll', function() {
    const header1 = document.querySelector('.header-1'); 
    const header2 = document.querySelector('.header-2'); 
    const textsection = document.querySelector('.section-1'); 
    const logo = document.querySelector('.logo img'); // Logo en el encabezado
    const scrollPosition = window.scrollY; // Obtiene la posición del scroll
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // Define punto de quiebre para pantallas pequeñas

    // Si la posición de scroll es mayor a 50 píxeles
    if (scrollPosition > 50) {
        header1.style.transform = 'translateY(-100%)'; // Mueve header-1 hacia arriba y lo oculta
        header2.style.position = 'fixed'; // Fija header-2 en la parte superior de la pantalla
        header2.style.borderBottom = '0.4px solid #fff'; // Agrega una línea inferior a header-2
        textsection.style.paddingTop = '75px'; // Añade espacio en la parte superior de la sección de texto
        logo.style.width = '80px'; // Cambia el tamaño del logo a 80px
    
    } else { 
        // Si el scroll es menor o igual a 50 píxeles, restablece estilos
        header1.style.transform = 'translateY(0)'; // Devuelve header-1 a su posición original
        header2.style.position = 'relative'; // Restablece header-2 a su posición relativa original
        textsection.style.paddingTop = '0'; // Elimina el espacio superior agregado
        logo.style.width = '110px'; // Restaura el tamaño del logo a 110px
    }

    // Si el ancho de la pantalla es menor a 768px, ajusta el logo
    if (mediaQuery.matches) {
        logo.style.width = '80px';
    }
});


// menú en pantallas pequeñas

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle"); // Botón para alternar el menú
    const menu = document.getElementById("menu"); // Elemento del menú

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active"); // Activa o desactiva la clase "active" del menú
    });
});
