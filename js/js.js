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

    setInterval(nextSlide, 5000); // Cambia cada 5 segundos

    window.addEventListener('scroll', function() {
        var scrolled = window.pageYOffset;
        var parallax = document.querySelector(".hero");
        parallax.style.backgroundPositionY = -(scrolled * 0.5) + "px";
    });
    
});
