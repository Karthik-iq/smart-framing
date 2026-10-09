document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const emptyState = document.getElementById('gallery-empty');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('bg-charcoal', 'text-paper', 'dark:bg-paper', 'dark:text-charcoal'));
            filterBtns.forEach(b => b.classList.add('bg-border', 'text-charcoal', 'dark:bg-dark-surface', 'dark:text-paper'));
            
            btn.classList.remove('bg-border', 'text-charcoal', 'dark:bg-dark-surface', 'dark:text-paper');
            btn.classList.add('bg-charcoal', 'text-paper', 'dark:bg-paper', 'dark:text-charcoal');

            const filter = btn.dataset.filter;
            let count = 0;
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    count++;
                } else {
                    item.style.display = 'none';
                }
            });

            if (emptyState) {
                emptyState.style.display = count === 0 ? 'block' : 'none';
            }
        });
    });

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const lbTitle = document.getElementById('lightbox-title');
    const lbCat = document.getElementById('lightbox-cat');
    
    let currentIdx = -1;
    let visibleItems = [];

    document.querySelectorAll('.open-lightbox').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const item = e.target.closest('.gallery-item');
            if(!item) return;
            
            visibleItems = Array.from(galleryItems).filter(i => i.style.display !== 'none');
            currentIdx = visibleItems.indexOf(item);
            
            const img = item.querySelector('img');
            const title = item.querySelector('.g-title').textContent;
            const cat = item.querySelector('.g-cat').textContent;
            
            if(lbImg && img) lbImg.src = img.src;
            if(lbTitle && title) lbTitle.textContent = title;
            if(lbCat && cat) lbCat.textContent = cat;
            
            if(lightbox) {
                lightbox.classList.remove('hidden');
                window.showToast('Opening artwork preview.');
            }
        });
    });

    document.getElementById('lightbox-close')?.addEventListener('click', () => {
        lightbox.classList.add('hidden');
    });

    document.getElementById('lightbox-next')?.addEventListener('click', () => {
        if (currentIdx < visibleItems.length - 1) {
            currentIdx++;
            updateLightbox();
        }
    });

    document.getElementById('lightbox-prev')?.addEventListener('click', () => {
        if (currentIdx > 0) {
            currentIdx--;
            updateLightbox();
        }
    });

    function updateLightbox() {
        const item = visibleItems[currentIdx];
        if(item) {
            lbImg.src = item.querySelector('img').src;
            lbTitle.textContent = item.querySelector('.g-title').textContent;
            lbCat.textContent = item.querySelector('.g-cat').textContent;
        }
    }
});
