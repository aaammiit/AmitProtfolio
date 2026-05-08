// Navigation Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        navToggle.classList.toggle('active');
    });
}

// Typing Effect simulation
const heroTitle = document.getElementById('heroTitle');
const titleText = "Python Django Developer";

if (heroTitle) {
    heroTitle.textContent = '';
    let i = 0;
    function type() {
        if (i < titleText.length) {
            heroTitle.textContent += titleText.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();
}

// Scroll Reveal Animation using Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-reveal').forEach(el => {
    revealObserver.observe(el);
});

// Form Submission handling (Prevent default for static demo)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = "Message Sent! ✓";
        btn.style.backgroundColor = "#22c55e";
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.backgroundColor = "";
            contactForm.reset();
        }, 3000);
    });
}

// Theme Toggle Logic
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

// Check for saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
root.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'light') {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
}

// Resume Download Handler (Placeholder)
const resumeBtn = document.getElementById('resumeBtn');
if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
        // Since we don't have a real file, we'll alert the user to upload one
        // If the file were there, the 'download' attribute would handle it.
        // This is just to be helpful to the user who asked for it.
        const fileExists = false; // Set to true if you upload resume.pdf
        if (!fileExists && resumeBtn.getAttribute('href') === 'resume.pdf') {
            console.log("Please upload a file named 'resume.pdf' to the root directory for this functionality to work.");
        }
    });
}

// Image Modal Logic
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('caption');
const closeSpan = document.querySelector('.modal-close');

document.querySelectorAll('.cert-item').forEach(item => {
    item.addEventListener('click', () => {
        const imgPath = item.getAttribute('data-img');
        const title = item.querySelector('h3').textContent;
        const org = item.querySelector('p').textContent;
        
        if (modal && modalImg && captionText) {
            modal.style.display = "flex";
            modalImg.src = imgPath;
            captionText.innerHTML = `<strong>${title}</strong><br>${org}`;
            document.body.style.overflow = 'hidden'; // Disable scroll
        }
    });
});

if (closeSpan) {
    closeSpan.onclick = function() {
        modal.style.display = "none";
        document.body.style.overflow = 'auto'; // Enable scroll
    }
}

if (modal) {
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        }
    }
}

// Smooth link scrolling for Safari/Older browsers if CSS smooth scroll fails
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
                navToggle.classList.remove('active');
            }
            
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
