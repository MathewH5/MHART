document.addEventListener('DOMContentLoaded', function() {
    const verMais = document.querySelector('.verMais');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });
  
    observer.observe(verMais);

  });