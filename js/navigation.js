document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Active state highlighting
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href && currentPath.includes(href.split('/').pop()) && href !== '#' && href !== '') {
            link.classList.add('text-accent');
        }
    });

    // Handle generic link toasts for Google/Apple
    document.querySelectorAll('button, a').forEach(el => {
        el.addEventListener('click', (e) => {
            const text = el.textContent.trim().toLowerCase();
            const href = el.getAttribute('href');
            if (text.includes('google')) {
                e.preventDefault();
                if (window.showToast) window.showToast('Google sign-in is available in the production version.');
            } else if (text.includes('apple') && href !== 'https://www.apple.com/') {
                if (!el.hasAttribute('href')) {
                    e.preventDefault();
                    window.open('https://www.apple.com/', '_blank');
                }
            }
        });
    });
});
