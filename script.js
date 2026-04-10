document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the 'fade-in' class
    const fadeElements = document.querySelectorAll('.fade-in');

    // Create an Intersection Observer to handle reveal on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class when the element comes into view
                entry.target.classList.add('visible');
                // Stop observing the element once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Trigger 10% of the element is visible
        threshold: 0.1,
        // Trigger slightly before it comes fully into view
        rootMargin: "0px 0px -30px 0px"
    });

    // Start observing each element
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Slow down the hero background video for a smoother atmospheric effect
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.playbackRate = 0.5; // 절반 속도로 부드럽게 재생
    }
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
