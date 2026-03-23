// ===== Smooth Scrolling for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Service Card Expansion =====
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    // First card is expanded by default via CSS
    if (index !== 0) {
        card.addEventListener('click', function() {
            // Close other expanded cards
            serviceCards.forEach(c => {
                if (c !== this) {
                    c.classList.remove('expanded');
                }
            });
            // Toggle current card
            this.classList.toggle('expanded');
        });
    }
});

// ===== Form Submission =====
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const service = this.querySelector('select').value;
    const message = this.querySelector('textarea').value;
    
    // Validate form
    if (!name || !email || !service || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate form submission (in real app, send to backend)
    console.log('Form Data:', { name, email, service, message });
    
    // Show success message
    const formButton = this.querySelector('button');
    const originalText = formButton.textContent;
    formButton.textContent = '✓ Message Sent Successfully!';
    formButton.style.background = '#27ae60';
    
    // Reset form
    this.reset();
    
    // Restore button after 3 seconds
    setTimeout(() => {
        formButton.textContent = originalText;
        formButton.style.background = '';
    }, 3000);
});

// ===== Scroll Reveal Animation =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all service cards and team cards
document.querySelectorAll('.service-card, .team-card, .testimonial-card, .feature-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===== Navigation Active State =====
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== Mobile Menu Toggle (for future enhancement) =====
function addMobileMenuToggle() {
    // Placeholder for mobile menu functionality
    const navContainer = document.querySelector('.nav-container');
    if (window.innerWidth <= 768) {
        // Mobile menu logic would go here
    }
}

addMobileMenuToggle();

// ===== Booking Button Handler =====
document.querySelector('.book-btn')?.addEventListener('click', function() {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

// ===== Service Cards Keyboard Navigation =====
serviceCards.forEach((card, index) => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && index !== 0) {
            this.classList.toggle('expanded');
        }
    });
});

// ===== Scroll-to-Top Button =====
function createScrollToTopButton() {
    const btn = document.createElement('button');
    btn.id = 'scrollToTop';
    btn.innerHTML = '↑';
    btn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #d4af37, #f39c12);
        color: #1a1a2e;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: bold;
        display: none;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.4);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(btn);
    
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 300) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });
    
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.1)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });
}

createScrollToTopButton();

// ===== Team Card Click to Show Details =====
document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('click', function() {
        const name = this.querySelector('h3').textContent;
        const specialty = this.querySelector('.specialty').textContent;
        const bio = this.querySelector('.bio').textContent;
        
        // Create modal (simple version)
        console.log(`Selected: ${name} - ${specialty}`);
        // In a real app, this would show a modal with full details
    });
});

// ===== Testimonial Slider (Optional Enhancement) =====
function initTestimonialSlider() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let currentIndex = 0;
    
    // Add navigation buttons
    const container = document.querySelector('.testimonial-grid');
    if (testimonialCards.length > 3) {
        // Slider logic would go here
        console.log('Testimonial slider initialized');
    }
}

initTestimonialSlider();

// ===== Smooth Page Load Animation =====
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

setTimeout(() => {
    document.body.style.opacity = '1';
}, 100);

// ===== Dynamic Year in Footer =====
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('.footer');
    if (footer) {
        const year = new Date().getFullYear();
        const footerText = footer.textContent;
        footer.textContent = footerText.replace('2024', year);
    }
});

// ===== Service Detail Toggle for Mobile =====
if (window.innerWidth <= 768) {
    document.querySelectorAll('.service-card').forEach((card, index) => {
        const content = card.querySelector('.service-content');
        if (index !== 0) {
            content.style.display = 'none';
        }
        
        card.querySelector('.service-header').addEventListener('click', function() {
            const isVisible = content.style.display !== 'none';
            content.style.display = isVisible ? 'none' : 'block';
            card.classList.toggle('expanded');
        });
    });
}

// ===== Feature Cards Hover Effect =====
document.querySelectorAll('.feature-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(243, 156, 18, 0.15) 100%)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.background = 'linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(243, 156, 18, 0.08) 100%)';
    });
});

// ===== Price Display Helper =====
function formatPriceRange(minPrice, maxPrice) {
    return `₹${minPrice.toLocaleString('en-IN')} - ₹${maxPrice.toLocaleString('en-IN')}`;
}

// ===== Patient Journey Tracker =====
const patientJourney = {
    'FUE': {
        timeline: '12-18 months',
        sessions: '1-2 sessions',
        recovery: '7-10 days',
        results: 'Permanent'
    },
    'DHI': {
        timeline: '12-18 months',
        sessions: '1-2 sessions',
        recovery: '5-7 days',
        results: 'Permanent'
    },
    'LaserResurfacing': {
        timeline: '3-6 months',
        sessions: '3-5 sessions',
        recovery: '3-7 days per session',
        results: 'Long-lasting (3-5 years)'
    },
    'LaserHairRemoval': {
        timeline: '6-12 months',
        sessions: '6-8 sessions',
        recovery: 'No downtime',
        results: '85-95% reduction'
    }
};

// ===== Service Search Filter (Future Enhancement) =====
function filterServices(searchTerm) {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        const title = card.querySelector('.service-header h3').textContent.toLowerCase();
        const content = card.textContent.toLowerCase();
        
        if (title.includes(searchTerm.toLowerCase()) || content.includes(searchTerm.toLowerCase())) {
            card.style.display = 'block';
            card.style.animation = 'slideInUp 0.3s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

// ===== Accessibility Improvements =====
document.querySelectorAll('button, a').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '3px solid #d4af37';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// ===== Analytics Tracking (Placeholder) =====
function trackServiceView(serviceName) {
    console.log(`User viewed: ${serviceName}`);
    // In production, send to analytics service
}

document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function() {
        const serviceName = this.querySelector('.service-header h3').textContent;
        trackServiceView(serviceName);
    });
});

// ===== Consultation Request Handler =====
function requestConsultation(serviceType) {
    const form = document.querySelector('.contact-form');
    if (form) {
        const select = form.querySelector('select');
        select.value = serviceType;
        form.scrollIntoView({ behavior: 'smooth' });
    }
}

// Make global
window.requestConsultation = requestConsultation;

// ===== Performance Optimization =====
// Lazy load images (if added in future)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

console.log('Lumière Dermatology Website - Interactive Features Loaded');
