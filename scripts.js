// Esperamos a que se cargue el DOM
document.addEventListener('DOMContentLoaded', function() {

    // Manejador para el formulario de contacto
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Aquí puedes agregar lo que sucede después de enviar el formulario
        alert('Message sent. Thank you for contacting us!');

        // Limpia el formulario después del envío
        this.reset();
    });

    // Aquí puedes añadir más código para otras funcionalidades, como el carrusel
});


$(document).ready(function(){
    $('.banner-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000
    });

    // El resto de tu código JS
});

