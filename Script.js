// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change header color when scrolling
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');

    if (window.scrollY > 50) {
        header.style.background = "#061529";
    } else {
        header.style.background = "#0b1f3a";
    }
});
