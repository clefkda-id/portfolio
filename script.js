document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed('#typed-text', {
        strings: [
            "I write clean code and compelling words.",
            "Frontend Developer.",
            "Copywriter."
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
});

document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll("details.custom-accordion").forEach(el => el.onclick = function() {
    const open = document.querySelector("details.custom-accordion[open]");
    if (open && open !== this) open.removeAttribute("open");
});

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-section');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden-section');
    observer.observe(section);
});