// Inject header and footer into every page
const currentPage = location.pathname.split('/').pop() || 'index.html';


const navLinks = [
  { href: 'index.html',     label: 'Home' },
  { href: 'about.html',     label: 'About' },
  { href: 'services.html',  label: 'Services' },
  { href: 'pricing.html',   label: 'Pricing' },
  { href: 'shop.html',      label: 'Shop' },
  { href: 'blog.html',      label: 'Blog' },
  { href: 'kkc-cares.html', label: 'KKC Cares' },
];

const navHTML = navLinks.map(l =>
  `<a href="${l.href}" class="${currentPage === l.href ? 'active' : ''}">${l.label}</a>`
).join('');

const siteHeader = `
<header class="site-header">
  <div class="logo"><a href="index.html"><img src="assets/kkc-logo-shiny.webp?v=2" alt="Krystal Klear Clean"></a></div>
  <nav class="site-nav">
    ${navHTML}
    <a href="https://www.facebook.com/Krystalklearcleanllc" class="nav-social" target="_blank" rel="noopener" aria-label="Krystal Klear Clean on Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9z"/></svg></a><a href="https://www.instagram.com/Krystalklearcleanllc" class="nav-social" target="_blank" rel="noopener" aria-label="Krystal Klear Clean on Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zm5-9.2a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM21.9 7.9c-.1-1.6-.4-3-1.6-4.2S17.7 2.2 16.1 2.1C14.5 2 9.5 2 7.9 2.1c-1.6.1-3 .4-4.2 1.6S2.2 6.3 2.1 7.9C2 9.5 2 14.5 2.1 16.1c.1 1.6.4 3 1.6 4.2s2.6 1.5 4.2 1.6c1.6.1 6.6.1 8.2 0 1.6-.1 3-.4 4.2-1.6s1.5-2.6 1.6-4.2c.1-1.6.1-6.6 0-8.2zm-2.1 10a3.3 3.3 0 0 1-1.9 1.9c-1.3.5-4.3.4-5.9.4s-4.6.1-5.9-.4a3.3 3.3 0 0 1-1.9-1.9c-.5-1.3-.4-4.3-.4-5.9s-.1-4.6.4-5.9a3.3 3.3 0 0 1 1.9-1.9c1.3-.5 4.3-.4 5.9-.4s4.6-.1 5.9.4a3.3 3.3 0 0 1 1.9 1.9c.5 1.3.4 4.3.4 5.9s.1 4.6-.4 5.9z"/></svg></a>
    <a href="contact.html" class="btn-nav">Book Now</a>
  </nav>
</header>`;

const siteFooter = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="assets/kkc-logo-shiny.webp?v=2" alt="Krystal Klear Clean">
        <p>Delivering an elevated standard of clean to homes and businesses. Trusted, insured, and devoted to your space.</p>
      </div>
      <div class="footer-col"><h5>Services</h5><ul>
        <li><a href="services.html">Residential Cleaning</a></li>
        <li><a href="services.html">Commercial Cleaning</a></li>
        <li><a href="services.html">Post-Construction</a></li>
        <li><a href="services.html">Move In / Move Out</a></li>
        <li><a href="services.html">Rental &amp; Airbnb</a></li>
      </ul></div>
      <div class="footer-col"><h5>Company</h5><ul>
        <li><a href="about.html">About Us</a></li>
        <li><a href="pricing.html">Pricing</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="shop.html">Shop</a></li>
        <li><a href="kkc-cares.html">KKC Cares</a></li>
      </ul></div>
      <div class="footer-col"><h5>Contact</h5><ul>
        <li><a href="contact.html">Book a Clean</a></li>
        <li><a href="contact.html">Get a Quote</a></li>
        <li><a href="mailto:krystalklearclean518@gmail.com">krystalklearclean518@gmail.com</a></li>
        <li><a href="tel:+15188369325">(518) 836-9325</a></li>
      </ul></div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Krystal Klear Clean. All rights reserved.</span>
      <div class="footer-social"><a href="https://www.facebook.com/Krystalklearcleanllc" target="_blank" rel="noopener" aria-label="Krystal Klear Clean on Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9z"/></svg></a><a href="https://www.instagram.com/Krystalklearcleanllc" target="_blank" rel="noopener" aria-label="Krystal Klear Clean on Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zm5-9.2a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM21.9 7.9c-.1-1.6-.4-3-1.6-4.2S17.7 2.2 16.1 2.1C14.5 2 9.5 2 7.9 2.1c-1.6.1-3 .4-4.2 1.6S2.2 6.3 2.1 7.9C2 9.5 2 14.5 2.1 16.1c.1 1.6.4 3 1.6 4.2s2.6 1.5 4.2 1.6c1.6.1 6.6.1 8.2 0 1.6-.1 3-.4 4.2-1.6s1.5-2.6 1.6-4.2c.1-1.6.1-6.6 0-8.2zm-2.1 10a3.3 3.3 0 0 1-1.9 1.9c-1.3.5-4.3.4-5.9.4s-4.6.1-5.9-.4a3.3 3.3 0 0 1-1.9-1.9c-.5-1.3-.4-4.3-.4-5.9s-.1-4.6.4-5.9a3.3 3.3 0 0 1 1.9-1.9c1.3-.5 4.3-.4 5.9-.4s4.6-.1 5.9.4a3.3 3.3 0 0 1 1.9 1.9c.5 1.3.4 4.3.4 5.9s.1 4.6-.4 5.9z"/></svg></a></div>
      <span>Privacy Policy · Terms</span>
    </div>
  </div>
</footer>`;

document.getElementById('kkc-header').outerHTML = siteHeader;
document.getElementById('kkc-footer').outerHTML = siteFooter;
