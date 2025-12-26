// ===================================
// NAVIGATION SCROLL EFFECT
// ===================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.getElementById('mainNav').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// ===================================
// ACTIVE NAVIGATION LINK ON SCROLL
// ===================================
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
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

// ===================================
// SKILL PROGRESS ANIMATION ON SCROLL
// ===================================
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const skillObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills-section');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}

// ===================================
// CONTACT FORM HANDLING
// ===================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name && email && subject && message) {
            // Show success message (you can customize this)
            alert(`Thank you, ${name}! Your message has been sent successfully. I'll get back to you soon!`);
            
            // Reset form
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// ===================================
// ANIMATE ELEMENTS ON SCROLL
// ===================================
const fadeInObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Apply fade-in animation to cards
const cards = document.querySelectorAll('.skill-card, .portfolio-card, .contact-card');
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(card);
});

// ===================================
// TYPING EFFECT FOR HERO SUBTITLE (OPTIONAL)
// ===================================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect
// const heroSubtitle = document.querySelector('.hero-subtitle');
// if (heroSubtitle) {
//     const originalText = heroSubtitle.textContent;
//     window.addEventListener('load', () => {
//         typeWriter(heroSubtitle, originalText, 30);
//     });
// }

// ===================================
// PORTFOLIO FILTER (OPTIONAL ENHANCEMENT)
// ===================================
// You can add filtering functionality here if needed

// ===================================
// PARALLAX EFFECT FOR HERO BACKGROUND
// ===================================
window.addEventListener('scroll', function() {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const scrolled = window.scrollY;
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===================================
// PRELOADER (OPTIONAL)
// ===================================
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add stagger animation to hero elements
    const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-buttons, .social-links');
    heroElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });
});

// ===================================
// DYNAMIC YEAR IN FOOTER
// ===================================
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2024', currentYear);
}

// ===================================
// CURSOR TRAIL EFFECT (OPTIONAL - PREMIUM FEATURE)
// ===================================
// Uncomment to enable cursor trail effect
/*
const cursor = document.createElement('div');
cursor.classList.add('cursor-trail');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
*/

// ===================================
// CONSOLE MESSAGE
// ===================================
console.log('%c👋 Welcome to Syeda Malaika\'s Portfolio!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cLooking for a web developer? Let\'s connect!', 'color: #ec4899; font-size: 14px;');

/* ===================================
   THEME TOGGLE + MOUSE TRACKER + FLOATING CARDS
   =================================== */

// Theme toggle (persisted)
const themeToggle = document.getElementById('themeToggle');
function applyTheme(theme) {
    if (theme === 'light') {
        document.documentElement.classList.add('light-theme');
    } else {
        document.documentElement.classList.remove('light-theme');
    }
    try { localStorage.setItem('theme', theme); } catch (e) {}
}

// initialize theme
(function() {
    const saved = (function() {
        try { return localStorage.getItem('theme'); } catch (e) { return null; }
    })();
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    const initial = saved || (prefersLight ? 'light' : 'dark');
    applyTheme(initial);
})();

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isLight = document.documentElement.classList.contains('light-theme');
        applyTheme(isLight ? 'dark' : 'light');
    });
}

// Cursor and mouse coords
const cursor = document.getElementById('cursor');
const mouseCoords = document.getElementById('mouseCoords');

document.addEventListener('mousemove', (e) => {
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
    if (mouseCoords) {
        mouseCoords.textContent = `x: ${e.clientX} y: ${e.clientY}`;
    }

    // subtle parallax for floating cards
    const fc = document.querySelector('.floating-cards');
    if (fc) {
        const rx = (e.clientX - window.innerWidth / 2) / 50;
        const ry = (e.clientY - window.innerHeight / 2) / 80;
        fc.style.transform = `translate(${rx}px, ${ry}px)`;
    }
});

// expand cursor for interactions
document.addEventListener('mousedown', () => cursor && cursor.classList.add('expand'));
document.addEventListener('mouseup', () => cursor && cursor.classList.remove('expand'));

// expand when hovering interactive elements
document.querySelectorAll('a, button, .btn, .portfolio-link').forEach(el => {
    el.addEventListener('mouseenter', () => cursor && cursor.classList.add('expand'));
    el.addEventListener('mouseleave', () => cursor && cursor.classList.remove('expand'));
});

// reduce motion for prefers-reduced-motion
if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.floating-card').forEach(c => c.style.animation = 'none');
    document.querySelectorAll('.spinning-circle').forEach(s => s.style.animation = 'none');
}
