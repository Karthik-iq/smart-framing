document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') document.documentElement.classList.add('dark');
    
    document.querySelectorAll('.theme-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            if (window.showToast) window.showToast(isDark ? 'Dark mode enabled.' : 'Light mode enabled.');
        });
    });
});
