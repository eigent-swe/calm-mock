/**
 * Testimonials section component
 */

const TESTIMONIALS = [
  {
    quote: "Calm has completely transformed my sleep routine. The sleep stories are incredible — I'm asleep within minutes.",
    name: 'Sarah M.',
    rating: 5,
    role: 'Teacher',
  },
  {
    quote: "I've tried many meditation apps but Calm is by far the best. The guided sessions are perfectly paced and the instructors are amazing.",
    name: 'James L.',
    rating: 5,
    role: 'Software Engineer',
  },
  {
    quote: "As someone who struggles with anxiety, Calm has been a lifeline. The breathing exercises and daily meditations keep me grounded.",
    name: 'Emily R.',
    rating: 5,
    role: 'Healthcare Worker',
  },
]

/**
 * Creates star rating HTML
 * @param {number} rating - Number of stars (1-5)
 * @returns {string} HTML string
 */
function createStars(rating) {
  return Array.from({ length: 5 }, (_, i) =>
    `<span class="testimonial__star ${i < rating ? 'testimonial__star--filled' : ''}">★</span>`
  ).join('')
}

/**
 * Creates the testimonials section HTML
 * @returns {string} HTML string
 */
export function createTestimonials() {
  const cardsHtml = TESTIMONIALS.map(t => `
    <div class="testimonial">
      <div class="testimonial__stars">${createStars(t.rating)}</div>
      <blockquote class="testimonial__quote">"${t.quote}"</blockquote>
      <div class="testimonial__author">
        <span class="testimonial__name">${t.name}</span>
        <span class="testimonial__role">${t.role}</span>
      </div>
    </div>
  `).join('')

  return `
    <section class="testimonials section" id="testimonials">
      <div class="section__inner">
        <h2 class="section__title">What Our Users Say</h2>
        <p class="section__subtitle">Join millions of people who have found their calm.</p>
        <div class="testimonials__grid">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `
}

export { TESTIMONIALS }
