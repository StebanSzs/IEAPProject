document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll(".hero .slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].classList.remove("active");
        currentSlide = (index + slides.length) % slides.length; // Asegura que el índice esté dentro de los límites
        slides[currentSlide].classList.add("active");
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    document.querySelector('.nav.next').addEventListener('click', nextSlide);
    document.querySelector('.nav.prev').addEventListener('click', prevSlide);

    setInterval(nextSlide, 10000); 

    window.addEventListener('scroll', function() {
        var scrolled = window.pageYOffset;
        var parallax = document.querySelector(".hero");
        parallax.style.backgroundPositionY = -(scrolled * 0.5) + "px";
    });
    
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.opacity = '0.8'; // Cambia la opacidad cuando se desplaza
    } else {
        header.style.opacity = '1'; // Opacidad completa en la parte superior
    }
});

document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Cambia 50 por el valor que consideres adecuado
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});
