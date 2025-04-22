// Enhanced script with smooth scrolling and animations
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    if (window.innerWidth <= 500) {
        document.querySelector('nav ul').classList.add('hidden');
        document.querySelector('#language-toggle').classList.remove('hidden');
    } else {
        document.querySelector('nav ul').classList.remove('hidden');
        document.querySelector('#language-toggle').classList.add('hidden');
    }

    document.querySelector('#menu-toggle').addEventListener('click', () => {
        const navMenu = document.querySelector('nav ul');
        navMenu.classList.toggle('hidden');
        
        // Update aria-expanded attribute for accessibility
        const menuToggle = document.querySelector('#menu-toggle');
        const isExpanded = navMenu.classList.contains('hidden') ? 'false' : 'true';
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 500) {
            document.querySelector('nav ul').classList.remove('hidden');
            document.querySelector('#language-toggle').classList.add('hidden');
        } else {
            document.querySelector('nav ul').classList.add('hidden');
            document.querySelector('#language-toggle').classList.remove('hidden');
        }
    });

    // --- Language Toggle (Mobile Only) ---
    const languageToggle = document.getElementById('language-toggle');
    const languageDropdown = document.querySelector('.language-dropdown');

    if (languageToggle && languageDropdown) {
        languageToggle.addEventListener('click', () => {
        const isVisible = languageDropdown.classList.toggle('visible');
        languageToggle.setAttribute('aria-expanded', isVisible ? 'true' : 'false');
        });

        // Hide language menu if clicking outside
        document.addEventListener('click', (e) => {
        if (!languageDropdown.contains(e.target) && !languageToggle.contains(e.target)) {
            languageDropdown.classList.remove('visible');
            languageToggle.setAttribute('aria-expanded', 'false');
        }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (window.innerWidth <= 500) {
                document.querySelector('nav ul').classList.add('hidden');
                document.querySelector('#menu-toggle').setAttribute('aria-expanded', 'false');
            }

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all sections
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('fade-in'); // Remove initial class
        observer.observe(section);
    });

    // Active section highlighting in navigation
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Dark mode toggle

    const toggleBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');

    if (!savedTheme) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const isDark = currentTheme === 'dark';
        document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });

});
