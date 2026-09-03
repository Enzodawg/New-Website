// Target Navbar elements
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

// Toggle 'active' visibility rules on click configurations
menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};