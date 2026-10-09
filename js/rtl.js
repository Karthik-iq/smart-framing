document.addEventListener('DOMContentLoaded', () => {
    const dir = localStorage.getItem('dir') || 'ltr';
    document.documentElement.dir = dir;
    
    document.querySelectorAll('.rtl-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const next = document.documentElement.dir === 'ltr' ? 'rtl' : 'ltr';
            document.documentElement.dir = next;
            localStorage.setItem('dir', next);
            if (window.showToast) window.showToast(next === 'rtl' ? 'RTL layout enabled.' : 'LTR layout enabled.');
        });
    });
});
