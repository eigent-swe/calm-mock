/**
 * Pricing/CTA section component
 */

const PLANS = [
  {
    name: 'Monthly',
    price: '$14.99',
    period: '/month',
    description: 'Full access to all Calm content',
    features: ['Sleep Stories', 'Guided Meditation', 'Music & Soundscapes', 'Daily Calm'],
    highlighted: false,
  },
  {
    name: 'Annual',
    price: '$69.99',
    period: '/year',
    description: 'Best value — save over 60%',
    features: ['Everything in Monthly', 'New content weekly', 'Offline listening', '7-day free trial'],
    highlighted: true,
  },
  {
    name: 'Lifetime',
    price: '$399.99',
    period: 'one-time',
    description: 'Pay once, enjoy forever',
    features: ['Everything in Annual', 'Lifetime access', 'All future content', 'Priority support'],
    highlighted: false,
  },
]

/**
 * Creates the pricing section HTML
 * @returns {string} HTML string
 */
export function createPricing() {
  const plansHtml = PLANS.map(plan => `
    <div class="pricing-card ${plan.highlighted ? 'pricing-card--highlighted' : ''}">
      ${plan.highlighted ? '<span class="pricing-card__badge">Most Popular</span>' : ''}
      <h3 class="pricing-card__name">${plan.name}</h3>
      <div class="pricing-card__price">
        <span class="pricing-card__amount">${plan.price}</span>
        <span class="pricing-card__period">${plan.period}</span>
      </div>
      <p class="pricing-card__description">${plan.description}</p>
      <ul class="pricing-card__features">
        ${plan.features.map(f => `<li class="pricing-card__feature">✓ ${f}</li>`).join('')}
      </ul>
      <a href="#signup" class="btn ${plan.highlighted ? 'btn--primary' : 'btn--secondary-dark'} pricing-card__cta">
        ${plan.highlighted ? 'Start Free Trial' : 'Get Started'}
      </a>
    </div>
  `).join('')

  return `
    <section class="pricing section" id="pricing">
      <div class="section__inner">
        <h2 class="section__title">Start Your Journey to Calm</h2>
        <p class="section__subtitle">Choose the plan that works for you. Cancel anytime.</p>
        <div class="pricing__grid">
          ${plansHtml}
        </div>
      </div>
    </section>
  `
}

export { PLANS }
