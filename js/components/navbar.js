// navbar.js

// 1. Inject the JetBrains Mono font and base styles into the document head
const style = document.createElement('style');
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'JetBrains Mono', monospace;
  }

  /* Navbar Container */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
    background: transparent; 
    width: 100%;
    position: relative;
    z-index: 200;
  }

  /* Left Side: Logo & Name */
  .nav-brand {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: var(--text, #1F2937);
  }

  .nav-logo {
    height: 32px;
    width: auto;
  }

  .nav-name {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.5px;
  }

  /* Right Side: Navigation Links */
  .nav-links {
    display: flex;
    gap: 30px;
    list-style: none;
  }

  /* Rolling Text Animation */
  .nav-item {
    text-decoration: none;
    display: block;
    position: relative;
    height: 24px;       
    overflow: hidden;   
    background: transparent;
    border: none;
    cursor: pointer;
  }

  /* Wrapper for primary and secondary text */
  .roller {
    display: flex;
    flex-direction: column;
    transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  }

  /* Styling for both states */
  .text-main, .text-hover {
    display: block;
    height: 24px;
    line-height: 24px;
    font-size: 15px;
    font-weight: 500;
    color: var(--text, #1E293B);
    white-space: nowrap;
  }

  /* Hover color swap */
  .text-hover {
    color: var(--accent2, #2D68C4); 
  }

  /* Hover effect: Slides up */
  .nav-item:hover .roller {
    transform: translateY(-24px);
  }

  /* Mobile Hamburger Toggle Button */
  .nav-toggle {
    display: none;
    background: transparent;
    border: none;
    cursor: pointer;
    flex-direction: column;
    gap: 6px;
    z-index: 110;
    padding: 4px;
  }

  .nav-toggle span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: var(--text, #1F2937);
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  /* Transform Hamburger lines to 'X' close state */
  .nav-toggle.active span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .nav-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  .nav-toggle.active span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  /* Responsiveness Rules for Mobile Menus */
  @media (max-width: 768px) {
    .navbar {
      padding: 15px 24px;
    }

    .nav-toggle {
      display: flex; /* Bring trigger to light on phone screens */
    }

    .nav-links {
      position: fixed;
      top: 0;
      right: -100%; /* Sits safely off-screen completely hidden */
      width: 75%;
      height: 100vh;
      background: var(--bg3, #ffffff);
      border-left: 1px solid var(--border, #e2e8f0);
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 40px;
      transition: right 0.4s cubic-bezier(0.25, 1, 0.5, 1);
      z-index: 105;
    }

    .nav-links.open {
      right: 0; /* Smooth slide-in action */
    }

    .text-main, .text-hover {
      font-size: 18px; /* Increased clickable scale adjustments for user fingers */
    }

    .nav-links .text-main {
      color: var(--text2, #1E293B); /* Swap this color code to whatever you want */
    }
  }
`;
document.head.appendChild(style);

// 2. Generate and inject the Navbar HTML
function initNavbar() {
  const navbarContainer = document.getElementById('navbar-container');
  
  if (!navbarContainer) {
    console.error("Navbar target element '#navbar-container' not found.");
    return;
  }

  navbarContainer.innerHTML = `
    <nav class="navbar">
      <a href="#home" class="nav-brand" target="_top">
        <img src="./assets/icons/logo.png" alt="Logo" class="nav-logo">
        <span class="nav-name">Salman Sayeed /-</span>
      </a>

      <button class="nav-toggle" id="menu-toggle" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="nav-links" id="nav-menu">
        <li>
          <a href="#skills" class="nav-item" target="_top">
            <span class="roller">
              <span class="text-main">Skills</span>
              <span class="text-hover">Skills</span>
            </span>
          </a>
        </li>
        <li>
          <a href="#works" class="nav-item" target="_top">
            <span class="roller">
              <span class="text-main">Works</span>
              <span class="text-hover">Works</span>
            </span>
          </a>
        </li>
        <li>
          <a href="#education" class="nav-item" target="_top">
            <span class="roller">
              <span class="text-main">Education</span>
              <span class="text-hover">Education</span>
            </span>
          </a>
        </li>
        <li>
          <a href="#about" class="nav-item" target="_top">
            <span class="roller">
              <span class="text-main">About</span>
              <span class="text-hover">About</span>
            </span>
          </a>
        </li>
        <li>
          <a href="#contact" class="nav-item" target="_top">
            <span class="roller">
              <span class="text-main">Contact</span>
              <span class="text-hover">Contact</span>
            </span>
          </a>
        </li>
      </ul>
    </nav>
  `;

  // 3. Attach interactive drawer animations and click event listeners
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinksList = document.querySelectorAll('.nav-links a');

  if (menuToggle && navMenu) {
    // Open and close actions on trigger button click
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      const isOpen = navMenu.classList.toggle('open');
      
      // Toggle body freeze state
      if (isOpen) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    });

    // Auto close slider layout and restore scrolling when clicking target sections
    navLinksList.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.classList.remove('no-scroll'); // Re-enable scroll when navigating
      });
    });
  }
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initNavbar);