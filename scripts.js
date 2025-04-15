// Scroll Progress Bar
const updateScrollProgress = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    
    document.querySelector('.scroll-progress-bar').style.width = `${progress}%`;
};

// Add scroll event listener
window.addEventListener('scroll', updateScrollProgress);

// Initialize progress bar on page load
window.addEventListener('load', updateScrollProgress);

// Intersection Observer options
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

// Callback function when element becomes visible
const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Optionally unobserve after animation
            // observer.unobserve(entry.target);
        }
    });
};

// Create the observer
const observer = new IntersectionObserver(handleIntersection, observerOptions);

// Function to start observing elements
const observeElements = () => {
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Observe service cards
    document.querySelectorAll('.service-card').forEach(card => {
        observer.observe(card);
    });

    // Observe process steps
    document.querySelectorAll('.process-step').forEach(step => {
        observer.observe(step);
    });

    // Observe stack categories
    document.querySelectorAll('.stack-category').forEach(category => {
        observer.observe(category);
    });

    // Observe section descriptions
    document.querySelectorAll('.section-description').forEach(desc => {
        observer.observe(desc);
    });

    // Observe certification badges
    document.querySelectorAll('.certification-badges img').forEach(badge => {
        observer.observe(badge);
    });
};

// Start observing when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    observeElements();
    updateScrollProgress(); // Initialize progress bar
}); 