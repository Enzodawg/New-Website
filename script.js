/**
 * Aryan Prajapati Portfolio
 * Navigation, mobile menu drawer, and scroll observer
 */

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('#menu-icon');
    const navLinks = document.querySelector('#nav-links');
    const navItems = document.querySelectorAll('.nav-link');
    const header = document.querySelector('#header');
    const sections = document.querySelectorAll('section[id]');

    // Mobile menu toggle
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            menuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close on clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // Close on navigation link click
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Header shadow on scroll
    const handleScroll = () => {
        if (window.scrollY > 30) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Highlight active nav item on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navItems.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    });

    sections.forEach(sec => observer.observe(sec));
});
