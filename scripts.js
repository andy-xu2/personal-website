// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
 
// Contact panel toggle
const contactBtn   = document.getElementById('contact-btn');
const contactClose = document.getElementById('contact-close');
const navLinks     = document.getElementById('nav-links');
const navContact   = document.getElementById('nav-contact');
 
contactBtn.addEventListener('click', e => {
    e.preventDefault();
    navLinks.classList.add('hidden');
    navContact.classList.add('active');
});
 
contactClose.addEventListener('click', () => {
    navContact.classList.remove('active');
    navLinks.classList.remove('hidden');
});