/**
 * Hero section component for Calm.com mock
 */

/**
 * Creates the hero section HTML
 * @returns {string} HTML string for the hero section
 */
export function createHero() {
  return `
    <section class="hero" id="hero">
      <div class="hero__overlay"></div>
      <div class="hero__content">
        <h1 class="hero__title">Meet Calm</h1>
        <p class="hero__subtitle">
          The #1 app for sleep, meditation, and relaxation.
          Calm your mind. Change your life.
        </p>
        <a href="#signup" class="btn btn--primary hero__cta">Try Calm for Free</a>
        <p class="hero__note">7-day free trial. Cancel anytime.</p>
      </div>
    </section>
  `
}
