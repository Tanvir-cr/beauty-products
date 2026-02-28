// Navbar Scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation Logic
const reveal = () => {
    const reveals = document.querySelectorAll('.scroll-reveal');
    
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', reveal);

// Simple Cart Count (For Demo)
const addButtons = document.querySelectorAll('.add-btn');
const cartCount = document.querySelector('.cart-icon span');
let count = 0;

addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        cartCount.innerText = count;
        btn.innerText = "Added!";
        btn.style.background = "#C5A059";
        
        setTimeout(() => {
            btn.innerText = "Quick Add";
            btn.style.background = "#121212";
        }, 2000);
    });
});
reveal();