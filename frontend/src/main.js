import './style.css'
import './components/header.css'
import { createHeader, initHeader } from './components/header.js'

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
        <section class="hero" id="hero">
          <div class="hero__content">
            <h1 class="hero__title">Meet Calm</h1>
            <p class="hero__subtitle">The #1 app for sleep, meditation, and relaxation.</p>
            <a href="#signup" class="btn btn--primary hero__cta">Try Calm for Free</a>
          </div>
        </section>
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
