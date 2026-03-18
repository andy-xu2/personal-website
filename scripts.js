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