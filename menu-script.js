// Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    
    // Toggle menu on click
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
            mainNav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
    
    // Handle submenu toggle
    const hasSubmenuItems = document.querySelectorAll('.has-submenu');
    hasSubmenuItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const submenu = item.querySelector('.submenu');
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close other submenus
            hasSubmenuItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('submenu-active');
                }
            });
            
            // Toggle current submenu
            item.classList.toggle('submenu-active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
                // Close menu after navigation
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });
});

