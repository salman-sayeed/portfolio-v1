/* ==========================================================================
   MAIN JAVASCRIPT CONTROLLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initTypewriter();
    initLiveClock();
    initNavbarScroll();
});

/* 1. TYPEWRITER EFFECT ENGINE */
function initTypewriter() {
    const targetElement = document.getElementById('typewriter-text');
    if (!targetElement) return;

    // Array of roles to rotate through
    const words = ["Full Stack Engineer", "Computer Science Researcher", "Machine Learning Engineer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Remove character
            targetElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40; // Faster deleting speed
        } else {
            // Add character
            targetElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 50; // Normal typing speed
        }

        // Logic transitions
        if (!isDeleting && charIndex === currentWord.length) {
            // Pause at the end of full word
            typeSpeed = 2000; 
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            // Move to next word array string
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Small break before typing next phrase
        }

        setTimeout(type, typeSpeed);
    }

    // Start loop
    setTimeout(type, 500);
}

/* 2. DYNAMIC LIVE CLOCK ENGINE */
function initLiveClock() {
    const dateContainer = document.getElementById('live-date');
    if (!dateContainer) return;

    // Helper function to get the correct English day suffix (1st, 2nd, 3rd, 4th...)
    function getOrdinalSuffix(day) {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
    }

    function updateClock() {
        const now = new Date();
        
        const dayOfMonth = now.getDate();
        const suffix = getOrdinalSuffix(dayOfMonth);
        
        // Get full month name (e.g., "June")
        const month = now.toLocaleDateString('en-US', { month: 'long' });
        
        // Get full weekday name (e.g., "Monday")
        const weekday = now.toLocaleDateString('en-US', { weekday: 'long' });
        
        // Get time (e.g., "12:17 AM")
        const time = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });

        // Combine into: "15th June | Monday 12:17 AM"
        const formattedDate = `${dayOfMonth}${suffix} ${month} | ${weekday} ${time}`;
        
        dateContainer.textContent = formattedDate.toUpperCase();
    }

    // Run instantly on load and refresh every minute
    updateClock();
    setInterval(updateClock, 60000);
}

/* 3. NAVBAR BACKGROUND CONTROL ON SCROLL */
function initNavbarScroll() {
    const navElement = document.querySelector('.site-nav');
    if (!navElement) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Add a solid dark background with subtle blur on scroll
            navElement.style.background = 'rgba(14, 12, 10, 0.85)';
            navElement.style.backdropFilter = 'blur(12px)';
            navElement.style.webkitBackdropFilter = 'blur(12px)';
            navElement.style.padding = '16px 0';
        } else {
            // Revert back to completely clean and spacious look when at top
            navElement.style.background = 'transparent';
            navElement.style.backdropFilter = 'none';
            navElement.style.webkitBackdropFilter = 'none';
            navElement.style.padding = '24px 0';
        }
    });
}


const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.addEventListener('click', function(e) {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
        history.pushState(null, '', window.location.pathname);
    }, 0);
});