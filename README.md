<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adventure Slider</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="slider-container">
        <div class="slider">
            <!-- Slide 1 - Mountain -->
            <div class="slide active">
                <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" alt="Mountain landscape">
                <div class="slide-content">
                    <h1 class="slide-title">WILDERNESS</h1>
                    <h2 class="slide-subtitle">SUMMIT</h2>
                </div>
            </div>
            
            <!-- Slide 2 - Beach -->
            <div class="slide">
                <img src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6" alt="Tropical beach">
                <div class="slide-content">
                    <h1 class="slide-title">TROPICAL</h1>
                    <h2 class="slide-subtitle">ESCAPE</h2>
                </div>
            </div>
            
            <!-- Slide 3 - Desert -->
            <div class="slide">
                <img src="https://images.unsplash.com/photo-1517825738774-7de9363ef735" alt="Desert landscape">
                <div class="slide-content">
                    <h1 class="slide-title">DESERT</h1>
                    <h2 class="slide-subtitle">ODESSEY</h2>
                </div>
            </div>
            
            <div class="navigation">
                <button class="prev">&#10094;</button>
                <button class="next">&#10095;</button>
            </div>
            
            <div class="slider-footer">Adventure is never far away</div>
        </div>
        
        <div class="thumbnails">
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" class="active" alt="Mountain thumbnail">
            <img src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Beach thumbnail">
            <img src="https://images.unsplash.com/photo-1517825738774-7de9363ef735?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Desert thumbnail">
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

body {
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.slider-container {
    width: 80%;
    max-width: 1200px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: white;
}

.slider-title {
    text-align: center;
    font-size: 3rem;
    color: #333;
    padding: 20px 0 0;
    text-transform: uppercase;
    letter-spacing: 3px;
}

.slider-subtitle {
    text-align: center;
    font-size: 1.5rem;
    color: #666;
    margin-bottom: 20px;
    letter-spacing: 10px;
}

.slider {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
}

.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.slide.active {
    opacity: 1;
}

.slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.caption {
    position: absolute;
    bottom: 60px;
    left: 0;
    width: 100%;
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    text-align: center;
    font-size: 1.2rem;
}

.navigation {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
}

.navigation button {
    background: rgba(255, 255, 255, 0.5);
    color: #333;
    border: none;
    padding: 15px;
    cursor: pointer;
    font-size: 1.5rem;
    transition: all 0.3s ease;
}

.navigation button:hover {
    background: rgba(255, 255, 255, 0.8);
}

.slider-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 15px;
    background: #333;
    color: white;
    text-align: center;
    font-size: 1rem;
    letter-spacing: 2px;
}

.thumbnails {
    display: flex;
    justify-content: center;
    padding: 15px 0;
    background: #f0f0f0;
}

.thumbnails img {
    width: 80px;
    height: 60px;
    margin: 0 5px;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.3s ease;
    border: 2px solid transparent;
}

.thumbnails img:hover {
    opacity: 0.8;
}

.thumbnails img.active {
    opacity: 1;
    border-color: #333;
}

/* Responsive design */
@media (max-width: 768px) {
    .slider-container {
        width: 95%;
    }
    
    .slider-title {
        font-size: 2rem;
    }
    
    .slider-subtitle {
        font-size: 1rem;
    }
    
    .slider {
        height: 300px;
    }
    
    .caption {
        font-size: 1rem;
        padding: 10px;
    }
    
    .thumbnails img {
        width: 60px;
        height: 45px;
    }
}
ocument.addEventListener('DOMContentLoaded', function() {
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
