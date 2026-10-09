document.addEventListener('DOMContentLoaded', () => {
    // Real-time validation for Name (prevent numbers from being typed)
    const nameInput = document.getElementById('q-name');
    if (nameInput) {
        nameInput.addEventListener('input', function() {
            this.value = this.value.replace(/[0-9]/g, '');
        });
    }

    // Real-time validation for Phone (prevent letters)
    const phoneInput = document.getElementById('q-phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9\s\+\-\(\)]/g, '');
        });
    }

    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('q-name').value.trim();
            const email = document.getElementById('q-email').value.trim();
            const phone = document.getElementById('q-phone').value.trim();
            const artworkType = document.getElementById('q-type').value;
            const pref = document.getElementById('q-pref').value;
            const size = document.getElementById('q-size').value.trim();
            const msg = document.getElementById('q-msg').value.trim();
            
            // Validate Name
            if (!name) { 
                window.showToast('Please enter your full name.'); 
                return; 
            }
            if (name.length < 2) {
                window.showToast('Name must be at least 2 characters long.');
                return;
            }
            
            // Validate Email (Strict Regex)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) { 
                window.showToast('Please enter a valid email address (e.g. name@example.com).'); 
                return; 
            }
            
            // Validate Phone
            if (!phone || phone.length < 8) { 
                window.showToast('Please enter a valid phone number (at least 8 digits).'); 
                return; 
            }
            
            // Validate Dropdowns & Text
            if (!artworkType) { window.showToast('Please select an artwork type.'); return; }
            if (!size) { window.showToast('Please enter the approximate size.'); return; }
            if (!pref) { window.showToast('Please select a framing preference.'); return; }
            if (!msg) { window.showToast('Please provide additional details about your piece.'); return; }
            
            // Success
            window.showToast('Thank you. Your quote request has been received. Our framing specialist will contact you shortly.');
            quoteForm.reset();
            
            const conf = document.getElementById('quote-confirmation');
            if(conf) {
                quoteForm.style.display = 'none';
                conf.style.display = 'block';
            }
        });
    }
});
