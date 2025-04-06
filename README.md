# ImageSlider
#htmlcode
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
