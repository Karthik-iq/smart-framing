window.showToast = function(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'fixed bottom-4 right-4 z-50 flex flex-col gap-2';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'bg-charcoal text-paper dark:bg-paper dark:text-charcoal px-6 py-3 shadow-lg flex items-center justify-between gap-4 translate-y-full opacity-0 transition-all duration-300 border border-dark-surface dark:border-border font-sans';
    toast.innerHTML = `
        <span class="text-sm font-medium">${message}</span>
        <button class="text-warm-gray hover:text-accent ml-4" onclick="this.parentElement.remove()">&times;</button>
    `;
    container.appendChild(toast);
    setTimeout(() => toast.classList.remove('translate-y-full', 'opacity-0'), 10);
    setTimeout(() => {
        toast.classList.add('translate-y-full', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}
