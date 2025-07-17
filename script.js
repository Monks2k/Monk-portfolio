document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio script loaded');

    // Slideshow functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    // Create navigation dots container
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('dots-container');
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            slideIndex = i;
            showSlide(slideIndex);
        });
        dotsContainer.appendChild(dot);
    });
    const slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.parentNode.insertBefore(dotsContainer, slideshowContainer.nextSibling);

    function showSlide(index) {
        if (index >= slides.length) {
            slideIndex = 0;
        }
        if (index < 0) {
            slideIndex = slides.length - 1;
        }
        slides.forEach((slide, i) => {
            slide.style.display = (i === slideIndex) ? 'block' : 'none';
        });
        // Update active dot
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === slideIndex);
        });
    }

    function nextSlide() {
        slideIndex++;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex--;
        showSlide(slideIndex);
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    }

    // Keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    // Initialize slideshow
    showSlide(slideIndex);
});
