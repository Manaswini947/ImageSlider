document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    
    // Initialize slider
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        
        slides[index].classList.add('active');
        thumbnails[index].classList.add('active');
        currentSlide = index;
    }
    
    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Thumbnail click events
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => showSlide(index));
    });
    
    // Auto-advance slides (optional)
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause on hover
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 5000));
    
    // Touch support for mobile devices
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(slideInterval);
    }, {passive: true});
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        slideInterval = setInterval(nextSlide, 5000);
    }, {passive: true});
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextSlide(); // Swipe left
        }
        if (touchEndX > touchStartX + 50) {
            prevSlide(); // Swipe right
        }
    }
    
    // Show first slide initially
    showSlide(0);
});
