/**
 * Footer component
 */

const FOOTER_LINKS = {
  company: {
    title: 'Company',
    links: [
      { text: 'About', href: '#about' },
      { text: 'Careers', href: '#careers' },
      { text: 'Press', href: '#press' },
      { text: 'Blog', href: '#blog' },
    ],
  },
  offers: {
    title: 'Offers',
    links: [
      { text: 'Calm Health', href: '#calm-health' },
      { text: 'Calm Business', href: '#calm-business' },
      { text: 'Calm for Schools', href: '#schools' },
      { text: 'Gift Calm', href: '#gift' },
    ],
  },
  help: {
    title: 'Help',
    links: [
      { text: 'FAQ', href: '#faq' },
      { text: 'Contact', href: '#contact' },
      { text: 'Terms', href: '#terms' },
      { text: 'Privacy Policy', href: '#privacy' },
    ],
  },
}

const SOCIAL_LINKS = [
  { name: 'Instagram', icon: '📷', href: 'https://instagram.com/calm' },
  { name: 'YouTube', icon: '▶️', href: 'https://youtube.com/calm' },
  { name: 'Facebook', icon: '👤', href: 'https://facebook.com/calm' },
]

/**
 * Creates the footer HTML
 * @returns {string} HTML string
 */
export function createFooter() {
  const columnsHtml = Object.values(FOOTER_LINKS).map(col => `
    <div class="footer__column">
      <h4 class="footer__column-title">${col.title}</h4>
      <ul class="footer__links">
        ${col.links.map(link => `
          <li><a href="${link.href}" class="footer__link">${link.text}</a></li>
        `).join('')}
      </ul>
    </div>
  `).join('')

  const socialHtml = SOCIAL_LINKS.map(s => `
    <a href="${s.href}" class="footer__social-link" aria-label="${s.name}" target="_blank" rel="noopener">
      <span class="footer__social-icon">${s.icon}</span>
    </a>
  `).join('')

  return `
    <footer class="footer" id="footer">
      <div class="footer__inner">
        <div class="footer__top">
          <div class="footer__brand">
            <a href="/" class="footer__logo" aria-label="Calm Home">
              <svg viewBox="0 0 120 40" width="90" height="30" class="footer__logo-svg">
                <rect rx="7" ry="7" width="30" height="30" fill="#5B8EBF" x="0" y="5"/>
                <text x="15" y="24" font-family="Georgia, serif" font-size="13" fill="white" text-anchor="middle" font-style="italic">Calm</text>
              </svg>
            </a>
            <p class="footer__tagline">Find your calm.</p>
          </div>
          ${columnsHtml}
        </div>
        <div class="footer__bottom">
          <p class="footer__copyright">Copyright ${new Date().getFullYear()} Calm. All rights reserved.</p>
          <div class="footer__social">
            ${socialHtml}
          </div>
        </div>
      </div>
    </footer>
  `
}

export { FOOTER_LINKS, SOCIAL_LINKS }
