document.addEventListener("DOMContentLoaded", () => {
    const indicatorItems = document.querySelectorAll('.section-indicator .indicator-item');
    const sections = ['home', 'education', 'projects', 'research', 'contact']
        .map(id => document.getElementById(id))
        .filter(Boolean);

    const setActive = (id) => {
        indicatorItems.forEach(item => {
            item.classList.toggle('active', item.dataset.section === id);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActive(entry.target.id);
            }
        });
    }, {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0
    });

    sections.forEach(section => observer.observe(section));

    // Set initial active state on load
    if (sections.length > 0) {
        setActive(sections[0].id);
    }
});