document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll untuk tombol "Jelajahi Fitur"
    const ctaButton = document.querySelector('.cta-button');

    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah perilaku default link

            const targetId = this.getAttribute('href'); // Mendapatkan href (#fitur)
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Scroll ke bagian target dengan animasi halus
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Tambahkan interaksi lain di sini jika diperlukan
});