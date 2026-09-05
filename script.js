const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// Toggle Mobile Menu
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close Mobile Menu automatically on item click
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

