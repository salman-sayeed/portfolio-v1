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
  }

  /* Left Side: Logo & Name */
  .nav-brand {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: #1F2937;
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
    color:#1E293B;
    white-space: nowrap;
  }

  /* Hover color swap */
  .text-hover {
    color: #2D68C4; 
  }

  /* Hover effect: Slides up */
  .nav-item:hover .roller {
    transform: translateY(-24px);
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

      <ul class="nav-links">
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
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initNavbar);