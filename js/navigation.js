const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.navLink');

if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            navLinks.forEach((link) => {
                link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
            });
        });
    }, {
        rootMargin: '-35% 0px -55%'
    });

    sections.forEach((section) => sectionObserver.observe(section));
}
