document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Initialize Typed.js for dynamic text
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: [
                "CSE Student – Data Science",
                "Python Developer",
                "Problem Solver",
                "Aspiring Data Scientist"
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            autoInsertCss: true
        });
    }

    // 2. Initialize tsParticles for the background effect
    const initParticles = async () => {
        await tsParticles.load("tsparticles", {
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#00f0ff", // Neon Blue accent
                },
                links: {
                    color: "#00f0ff",
                    distance: 150,
                    enable: true,
                    opacity: 0.2,
                    width: 1,
                },
                collisions: {
                    enable: false,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1.5,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 40,
                },
                opacity: {
                    value: 0.4,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 2 },
                },
            },
            detectRetina: true,
        });
    };
    
    if (window.tsParticles) {
        initParticles();
    }

    // 3. Smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
            const icon = document.querySelector('.hamburger i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // offset for navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Toggle icon between bars and times (close)
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 5. Scroll Reveal Animations with IntersectionObserver
    const revealElements = document.querySelectorAll('.section-hidden');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            entry.target.classList.add('section-visible');
            observer.unobserve(entry.target); // Only animate once
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 6. Navigation Background change on scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
            nav.style.background = 'rgba(5, 5, 5, 0.95)';
        } else {
            nav.style.boxShadow = 'none';
            nav.style.background = 'rgba(5, 5, 5, 0.8)';
        }
    });

});
