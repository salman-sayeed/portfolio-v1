function loadFooter() {
    const footerContainer = document.getElementById('footer');
    if (!footerContainer) return;

    // 1. Structural HTML layout definition
    const footerHTML = `
        <footer class="site-footer">
            <div class="footer-grid-container">
                
                <div class="footer-brand-col">
                    <span class="footer-logo">SALMAN SAYEED //</span>
                    <p class="footer-tag">The best code is no code.</p>
                </div>

                <div class="footer-links-col">
                    <span class="footer-col-label">MENU</span>
                    <ul class="footer-list">
                        <li><a href="#hero">Top ↑</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Works</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div class="footer-links-col">
                    <span class="footer-col-label">SOCIALS</span>
                    <ul class="footer-list">
                        <li><a href="https://github.com/salman-sayeed" target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
                        <li><a href="https://www.linkedin.com/in/salmansayeed25/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
                        <li><a href="https://www.instagram.com/salman_bin_lemon/" target="_blank" rel="noopener noreferrer">Instagram ↗</a></li>
                    </ul>
                </div>

            </div>

            <div class="footer-bottom-strip">
                <p>&copy; ${new Date().getFullYear()} — Handcrafted by <a href="https://github.com/salman-sayeed" target="_blank" rel="noopener noreferrer">&ltsalman-sayeed&gt</a> </p>
                <span class="footer-speed-token">Dhaka, Bangladesh</span>
            </div>
        </footer>
    `;

    // 2. Inject structural node string
    footerContainer.innerHTML = footerHTML;
}

// Run loop execution instantly
loadFooter();