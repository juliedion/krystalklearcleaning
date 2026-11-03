// Inject announcement bar, header, and footer into every page
const currentPage = location.pathname.split('/').pop() || 'index.html';

const announcementBar = `
<div class="announcement-bar">
  <div class="announcement-track">
    <div class="announcement-item"><span class="dot"></span> Professional Residential &amp; Commercial Cleaning</div>
    <div class="announcement-item"><span class="dot"></span> Fully Insured &amp; Bonded</div>
    <div class="announcement-item"><span class="dot"></span> Eco-Friendly Products Available</div>
    <div class="announcement-item"><span class="dot"></span> 5-Star Rated Service</div>
    <div class="announcement-item"><span class="dot"></span> Serving the Region Since 2018</div>
    <div class="announcement-item"><span class="dot"></span> 100% Satisfaction Guarantee</div>
    <div class="announcement-item"><span class="dot"></span> Book Online Today — Same-Week Availability</div>
    <div class="announcement-item"><span class="dot"></span> Professional Residential &amp; Commercial Cleaning</div>
    <div class="announcement-item"><span class="dot"></span> Fully Insured &amp; Bonded</div>
    <div class="announcement-item"><span class="dot"></span> Eco-Friendly Products Available</div>
    <div class="announcement-item"><span class="dot"></span> 5-Star Rated Service</div>
    <div class="announcement-item"><span class="dot"></span> Serving the Region Since 2018</div>
    <div class="announcement-item"><span class="dot"></span> 100% Satisfaction Guarantee</div>
    <div class="announcement-item"><span class="dot"></span> Book Online Today — Same-Week Availability</div>
  </div>
</div>`;

const navLinks = [
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
        <li><a href="mailto:hello@krystalklearclean.ca">hello@krystalklearclean.ca</a></li>
        <li><a href="tel:5550000000">(555) 000-0000</a></li>
      </ul></div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Krystal Klear Clean. All rights reserved.</span>
      <div class="footer-social"><a href="#">ig</a><a href="#">fb</a><a href="#">tk</a></div>
      <span>Privacy Policy · Terms</span>
    </div>
  </div>
</footer>`;

document.getElementById('kkc-announcement').outerHTML = announcementBar;
document.getElementById('kkc-header').outerHTML = siteHeader;
document.getElementById('kkc-footer').outerHTML = siteFooter;
