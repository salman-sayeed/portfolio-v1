// Register the ScrollTrigger plugin explicitly
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();      // Initialize the premium smooth scroll engine
    initHeroEntrance();      // Run the intro reveal timeline
    initScrollReveals();     // Run smooth sequential section fades
});

/* ==========================================================================
   1. PREMIUM SMOOTH SCROLL ENGINE (Lenis)
   ========================================================================== */
function initSmoothScroll() {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth natural deceleration
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false
    });

    // Sync ScrollTrigger with Lenis updates
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
}

/* ==========================================================================
   2. HERO ENTRANCE MOVEMENT (Fixed Button Loading)
   ========================================================================== */
function initHeroEntrance() {
    const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.9 }
    });

    tl.from('.navbar', { y: -30, opacity: 0, duration: 0.7 })
      .from('.name-line', { y: 80, opacity: 0, stagger: 0.15 }, "-=0.3")
      .from('.hero-typewriter-container', { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
      .from('.hero-about-brief p', { y: 25, opacity: 0, duration: 0.7 }, "-=0.5")
      .from('.hero-cta-wrapper .btn-primary, .hero-cta-wrapper .btn-secondary', {
          y: 20, opacity: 0, stagger: 0.1, duration: 0.6,
          clearProps: "opacity,transform"   // cleans up after itself
      }, "-=0.5")
      .from('.hero-image-wrapper', { scale: 0.97, opacity: 0, duration: 1.1 }, "-=0.7")
      .from('.hero-meta-data', { opacity: 0, duration: 0.8 }, "-=0.6")
      .from('.hero-right p', { opacity: 0, duration: 0.6 }, "-=0.4"); 
}

/* ==========================================================================
   3. FLUID SCROLL REVEALS (No Pinning / No Snapping)
   ========================================================================== */
function initScrollReveals() {
    const sections = gsap.utils.toArray('.panel-section');

    sections.forEach((section) => {
        const revealElements = section.querySelectorAll('.gsap-up, .gsap-fade');
        
        if (revealElements.length > 0) {
            gsap.to(revealElements, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%", // Animates cleanly when the top of the section hits 80% viewport height
                    toggleActions: "play none none reverse"
                },
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: "power3.out"
            });
        }
    });
}