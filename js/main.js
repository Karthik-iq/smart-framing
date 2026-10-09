// Image fallback
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function() {
            this.onerror = null;
            this.src = 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80';
            this.alt = 'Image fallback';
        };
    });
});
