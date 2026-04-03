/**
 * Social proof bar component
 */

const STATS = [
  { icon: '⭐', value: '4.5M+', label: '5-star reviews' },
  { icon: '📱', value: '100M+', label: 'downloads' },
  { icon: '🏆', value: '#1', label: 'App for Sleep' },
  { icon: '🍎', value: 'Apple', label: 'App of the Year' },
]

/**
 * Creates the social proof bar HTML
 * @returns {string} HTML string
 */
export function createSocialProof() {
  const statsHtml = STATS.map(stat => `
    <div class="social-proof__stat">
      <span class="social-proof__icon">${stat.icon}</span>
      <span class="social-proof__value">${stat.value}</span>
      <span class="social-proof__label">${stat.label}</span>
    </div>
  `).join('')

  return `
    <section class="social-proof" id="social-proof">
      <div class="social-proof__inner">
        ${statsHtml}
      </div>
    </section>
  `
}
