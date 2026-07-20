// Shared header + footer, injected on every page.
// The current page marks itself with <body data-page="home|services|advantage|about|clients|contact|book-demo|articles">

const NAV_LINKS = [
  { href: "index.html", key: "home", label: "Home" },
  { href: "services.html", key: "services", label: "Services" },
  {
    group: true,
    key: "foresight",
    label: "Foresight",
    children: [
      { href: "advantage.html", key: "advantage", label: "Advantage" },
      { href: "about.html", key: "about", label: "About" },
      { href: "articles.html", key: "articles", label: "Articles" },
    ],
  },
  { href: "clients.html", key: "clients", label: "Clients" },
  { href: "contact.html", key: "contact", label: "Contact" },
];

function renderHeader(activePage) {
  const desktopLinks = NAV_LINKS.map((item) => {
    if (item.group) {
      const children = item.children
        .map(
          (c) =>
            `<a href="${c.href}"${c.key === activePage ? ' class="active"' : ""}>${c.label}</a>`
        )
        .join("");
      return `<div class="navgroup" data-navgroup>
        <button type="button" class="navlink" aria-haspopup="menu">${item.label} <span aria-hidden="true">▾</span></button>
        <div class="navgroup-menu">${children}</div>
      </div>`;
    }
    return `<a href="${item.href}"${item.key === activePage ? ' class="active"' : ""}>${item.label}</a>`;
  }).join("");

  const mobileLinks = NAV_LINKS.map((item) => {
    if (item.group) {
      const children = item.children.map((c) => `<a href="${c.href}">${c.label}</a>`).join("");
      return `<div><div class="mobile-group-label">${item.label}</div>${children}</div>`;
    }
    return `<a href="${item.href}">${item.label}</a>`;
  }).join("");

  return `
  <header class="site-header">
    <div class="container px-6 bar">
      <a href="index.html" class="brand">ForeSight</a>
      <nav class="desktop-nav">${desktopLinks}</nav>
      <div class="header-actions">
        <a href="book-demo.html" class="btn-pill-dark hide-mobile">Book a demo</a>
        <button type="button" class="mobile-toggle" id="mobileToggle" aria-label="Menu">☰</button>
      </div>
    </div>
    <div class="mobile-nav" id="mobileNav">
      <div class="wrap">
        ${mobileLinks}
        <a href="book-demo.html" class="cta">Book a demo</a>
      </div>
    </div>
  </header>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <div class="brand" style="font-size:1.5rem;">ForeSight</div>
        <p class="mt-3" style="color:var(--teal); font-weight:600; font-size:0.875rem;">We quietly remove the manual. You see everything.</p>
        <p class="mt-3" style="max-width:24rem; font-size:0.875rem; color:color-mix(in oklab, var(--background) 70%, transparent);">
          Digital transformation is our craft; data and insights are our strength. We replace spreadsheets and status meetings with one clear executive view — strategy to KPIs in one place.
        </p>
        <a href="https://www.linkedin.com/company/foresight-mena" target="_blank" rel="noopener noreferrer"
           class="mt-6" style="display:inline-flex; align-items:center; gap:0.5rem; border-radius:999px; border:1px solid color-mix(in oklab, var(--background) 20%, transparent); padding:0.5rem 1rem; font-size:0.875rem; color:color-mix(in oklab, var(--background) 80%, transparent);">
          Follow on LinkedIn
        </a>
      </div>
      <div>
        <h4 class="eyebrow-teal" style="margin-bottom:1rem;">Explore</h4>
        <ul style="display:flex; flex-direction:column; gap:0.5rem;">
          <li class="li-link"><a href="services.html">Services</a></li>
          <li class="li-link"><a href="advantage.html">Advantage</a></li>
          <li class="li-link"><a href="about.html">About</a></li>
          <li class="li-link"><a href="clients.html">Clients</a></li>
          <li class="li-link"><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 class="eyebrow-teal" style="margin-bottom:1rem;">Contact</h4>
        <ul style="display:flex; flex-direction:column; gap:0.5rem; font-size:0.875rem; color:color-mix(in oklab, var(--background) 70%, transparent);">
          <li>hello@foresight.com</li>
          <li>Cairo · Riyadh · Dubai</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">© <span id="year"></span> ForeSight. All rights reserved.</div>
  </footer>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.getAttribute("data-page") || "";
  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");
  if (headerMount) headerMount.outerHTML = renderHeader(page);
  if (footerMount) footerMount.outerHTML = renderFooter();

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const mobileToggle = document.getElementById("mobileToggle");
  const mobileNav = document.getElementById("mobileNav");
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener("click", () => mobileNav.classList.toggle("open"));
  }

  document.querySelectorAll("[data-navgroup]").forEach((group) => {
    const btn = group.querySelector("button.navlink");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      group.classList.toggle("open");
    });
  });
  document.addEventListener("click", () => {
    document.querySelectorAll(".navgroup.open").forEach((g) => g.classList.remove("open"));
  });
});
