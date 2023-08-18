const animateUpElements = document.querySelectorAll('.animate-up');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.5 // Ajuste conforme necessário
});

animateUpElements.forEach(element => {
    observer.observe(element);
});
