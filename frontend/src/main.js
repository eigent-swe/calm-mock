import './style.css'
import './components/header.css'
import './components/hero.css'
import './components/social-proof.css'
import './components/features.css'
import { createHeader, initHeader } from './components/header.js'
import { createHero } from './components/hero.js'
import { createSocialProof } from './components/social-proof.js'
import { createFeatures } from './components/features.js'

/**
 * Initialize the Calm.com mock application
 */
export function initApp() {
  const app = document.getElementById('app')
  if (!app) return

  app.innerHTML = `
    <div class="calm-app">
      ${createHeader()}
      <main class="main">
        ${createHero()}
        ${createSocialProof()}
        ${createFeatures()}
      </main>
    </div>
  `

  initHeader()
}

// Auto-initialize when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp)
  } else {
    initApp()
  }
}
