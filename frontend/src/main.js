import './style.css'

/**
 * Initialize the Calm.com mock application
 */
export function initApp() {
  const app = document.getElementById('app')
  if (!app) return

  app.innerHTML = `
    <div class="calm-app">
      <header class="header">
        <div class="header__logo">Calm</div>
        <nav class="header__nav">
          <a href="#sleep">Sleep</a>
          <a href="#meditate">Meditate</a>
          <a href="#music">Music</a>
          <a href="#body">Body</a>
        </nav>
      </header>
      <main class="main">
        <section class="hero">
          <h1>Meet Calm</h1>
          <p>The #1 app for sleep, meditation, and relaxation.</p>
          <a href="#signup" class="btn btn--primary">Try Calm for Free</a>
        </section>
      </main>
    </div>
  `
}

// Auto-initialize when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp)
  } else {
    initApp()
  }
}
