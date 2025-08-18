// Smooth scrolling function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const elementPosition = element.offsetTop - headerHeight - 20;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    closeMobileMenu();
  }
}

// Mobile menu functionality
function toggleMobileMenu() {
  const mobileNav = document.getElementById('mobileNav');
  mobileNav.classList.toggle('active');
}

function closeMobileMenu() {
  const mobileNav = document.getElementById('mobileNav');
  mobileNav.classList.remove('active');
}

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // Simple validation
      if (!data.name || !data.email || !data.message) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Simulate form submission (in real app, send to server)
      console.log('Form submitted:', data);
      
      // Show success message
      alert('Thank you for your inquiry! I\'ll get back to you within 24 hours.');
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Add scroll effect to header
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    }
  });
  
  // Animate progress bars when they come into view
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressFill = entry.target;
        const width = progressFill.style.width;
        progressFill.style.width = '0%';
        setTimeout(() => {
          progressFill.style.width = width;
        }, 100);
      }
    });
  }, observerOptions);
  
  // Observe all progress bars
  const progressBars = document.querySelectorAll('.progress-fill');
  progressBars.forEach(bar => observer.observe(bar));
  
  // Animate achievement numbers when they come into view
  const achievementObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const numberElement = entry.target;
        const finalNumber = numberElement.textContent;
        
        // Only animate if it hasn't been animated before
        if (!numberElement.classList.contains('animated')) {
          numberElement.classList.add('animated');
          animateNumber(numberElement, finalNumber);
        }
      }
    });
  }, observerOptions);
  
  // Observe all achievement numbers
  const achievementNumbers = document.querySelectorAll('.achievement-number, .footer-stat-value');
  achievementNumbers.forEach(number => achievementObserver.observe(number));
});

// Number animation function
function animateNumber(element, finalValue) {
  const isPercentage = finalValue.includes('%');
  const hasPlus = finalValue.includes('+');
  const numericValue = parseFloat(finalValue.replace(/[^\d.]/g, ''));
  
  let current = 0;
  const increment = numericValue / 30; // Animate over 30 frames
  const timer = setInterval(() => {
    current += increment;
    if (current >= numericValue) {
      current = numericValue;
      clearInterval(timer);
    }
    
    let displayValue = Math.floor(current);
    if (isPercentage) {
      displayValue += '%';
    } else if (hasPlus) {
      if (finalValue.includes('K')) {
        displayValue += 'K+';
      } else if (finalValue.includes('M')) {
        displayValue += 'M+';
      } else {
        displayValue += '+';
      }
    }
    
    element.textContent = displayValue;
  }, 50);
}

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '0';
      this.style.transition = 'opacity 0.3s';
      setTimeout(() => {
        this.style.opacity = '1';
      }, 50);
    });
  });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeMobileMenu();
  }
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
  const mobileNav = document.getElementById('mobileNav');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  
  if (mobileNav && mobileNav.classList.contains('active')) {
    if (!mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      closeMobileMenu();
    }
  }
});

// Lazy loading for images (fallback for older browsers)
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach(img => imageObserver.observe(img));
}

// Add smooth transitions to cards on hover
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card, .project-card, .achievement-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.transition = 'transform 0.2s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to scroll event
const debouncedScrollHandler = debounce(function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
  } else {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add active nav link highlighting
function updateActiveNavLink() {
  const sections = ['about', 'projects', 'skills', 'contact'];
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  
  let current = '';
  
  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop - 200;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        current = sectionId;
      }
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.textContent.toLowerCase() === current) {
      link.classList.add('active');
    }
  });
}

// Add active link styles to CSS and update on scroll
window.addEventListener('scroll', debounce(updateActiveNavLink, 100));

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  // Set initial active nav link
  updateActiveNavLink();
  
  // Add focus trap for mobile menu
  const mobileNav = document.getElementById('mobileNav');
  const focusableElements = mobileNav.querySelectorAll('button');
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];
  
  mobileNav.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    }
  });
});