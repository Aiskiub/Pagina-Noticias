const switchButton = document.getElementById('switch');
const body = document.body;
const allNews = document.querySelectorAll('.news-item'); 

// Detectar cuando se cambia el estado del checkbox (switch)
switchButton.addEventListener('change', () => {
    body.classList.toggle('dark-mode');

    // Cambiar el estado del switch según el modo
    if (body.classList.contains('dark-mode')) {
        switchButton.checked = true;  // Si está en modo oscuro, activar el switch
    } else {
        switchButton.checked = false; // Si está en modo claro, desactivar el switch
    }
}
);

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Cierra el modal si el usuario hace clic fuera de él
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
        }
    }
};

function filterNews(category) {
    allNews.forEach(news => {
        if (category === 'all') {
            news.style.display = 'block'; // Muestra todas las noticias
        } else if (news.classList.contains(category)) {
            news.style.display = 'block'; // Muestra noticias de la categoría seleccionada
        } else {
            news.style.display = 'none'; // Oculta otras noticias
        }
    });
}
