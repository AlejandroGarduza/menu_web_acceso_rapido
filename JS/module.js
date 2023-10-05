document.addEventListener('DOMContentLoaded', function() {
    
    const images = document.querySelectorAll('.content_movies img');

    images.forEach(img => {

        img.addEventListener('click', () => {
        
        window.location.href = img.getAttribute('data-link');
    
        });
  
    });

});