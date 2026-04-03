/**
 * Header navigation component for Calm.com mock
 */

/**
 * Creates the header navigation HTML
 * @returns {string} HTML string for the header
 */
export function createHeader() {
  return `
    <header class="header" id="site-header">
      <div class="header__inner">
        <a href="/" class="header__logo" aria-label="Calm Home">
          <svg viewBox="0 0 120 40" width="100" height="34" class="header__logo-svg">
            <rect rx="8" ry="8" width="34" height="34" fill="#5B8EBF" x="0" y="3"/>
            <text x="17" y="26" font-family="Georgia, serif" font-size="16" fill="white" text-anchor="middle" font-style="italic">Calm</text>
          </svg>
        </a>

        <nav class="header__nav" id="main-nav" aria-label="Main navigation">
          <a href="#sleep" class="header__nav-link">Sleep</a>
          <a href="#meditate" class="header__nav-link">Meditate</a>
          <a href="#music" class="header__nav-link">Music</a>
          <a href="#body" class="header__nav-link">Body</a>
        </nav>

        <div class="header__actions">
          <a href="#login" class="header__login">Log In</a>
          <a href="#signup" class="btn btn--primary header__cta">Try Calm for Free</a>
        </div>

        <button class="header__hamburger" id="menu-toggle" aria-label="Toggle menu" aria-expanded="false">
          <span class="header__hamburger-line"></span>
          <span class="header__hamburger-line"></span>
          <span class="header__hamburger-line"></span>
        </button>
      </div>
    </header>
  `
}

/**
 * Initialize header interactivity (scroll behavior, mobile menu)
 */
export function initHeader() {
  const header = document.getElementById('site-header')
  const menuToggle = document.getElementById('menu-toggle')
  const nav = document.getElementById('main-nav')

  if (!header || !menuToggle || !nav) return

  // Scroll effect: add shadow on scroll
  let lastScrollY = 0
  const handleScroll = () => {
    const scrollY = window.scrollY
    if (scrollY > 50) {
      header.classList.add('header--scrolled')
    } else {
      header.classList.remove('header--scrolled')
    }
    lastScrollY = scrollY
  }
  window.addEventListener('scroll', handleScroll, { passive: true })

  // Mobile menu toggle
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'
    menuToggle.setAttribute('aria-expanded', String(!isOpen))
    header.classList.toggle('header--menu-open')
  })

  // Close mobile menu on nav link click
  nav.querySelectorAll('.header__nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false')
      header.classList.remove('header--menu-open')
    })
  })
}
