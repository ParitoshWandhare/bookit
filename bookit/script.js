// Simple interactivity for the landing page
document.addEventListener('DOMContentLoaded', () => {
    // Add active class to nav links on scroll (optional)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Add IDs to sections for scroll spy
    sections.forEach((section, index) => {
        if (!section.id) {
            section.id = `section-${index + 1}`;
        }
    });

    // Simple animation on scroll for movie cards
    const movieCards = document.querySelectorAll('.movie-card');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    movieCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});