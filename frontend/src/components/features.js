/**
 * Feature sections component
 */

const FEATURES = [
  {
    id: 'sleep',
    title: 'Sleep Stories',
    description: 'Fall asleep with bedtime stories narrated by world-renowned voices including Matthew McConaughey, Idris Elba, and more. Over 100 exclusive tales designed to lull you into deep, restful sleep.',
    image: '/assets/sleep-bg.jpg',
    cta: 'Explore Sleep',
  },
  {
    id: 'meditate',
    title: 'Meditation',
    description: 'Build a daily meditation practice with guided sessions for every experience level. Manage stress, improve focus, and find balance with programs ranging from 3 to 25 minutes.',
    image: '/assets/meditate-bg.jpg',
    cta: 'Start Meditating',
  },
  {
    id: 'music',
    title: 'Music & Soundscapes',
    description: 'Curated music tracks and immersive soundscapes designed for focus, relaxation, and sleep. From rainfall to ocean waves, find the perfect backdrop for any moment.',
    image: '/assets/music-bg.jpg',
    cta: 'Listen Now',
  },
  {
    id: 'body',
    title: 'Body & Movement',
    description: 'Mindful stretching, yoga, and movement exercises to release tension, improve flexibility, and connect your body and mind. Perfect for starting or ending your day.',
    image: '/assets/body-bg.jpg',
    cta: 'Get Moving',
  },
]

/**
 * Creates a single feature section HTML
 * @param {object} feature - Feature data
 * @param {number} index - Feature index (for alternating layout)
 * @returns {string} HTML string
 */
function createFeatureItem(feature, index) {
  const isReversed = index % 2 === 1
  return `
    <div class="feature ${isReversed ? 'feature--reversed' : ''}" id="${feature.id}">
      <div class="feature__image">
        <img src="${feature.image}" alt="${feature.title}" loading="lazy" />
      </div>
      <div class="feature__content">
        <h2 class="feature__title">${feature.title}</h2>
        <p class="feature__description">${feature.description}</p>
        <a href="#signup" class="btn btn--primary feature__cta">${feature.cta}</a>
      </div>
    </div>
  `
}

/**
 * Creates all feature sections HTML
 * @returns {string} HTML string
 */
export function createFeatures() {
  const featuresHtml = FEATURES.map((f, i) => createFeatureItem(f, i)).join('')
  return `
    <section class="features" id="features">
      <div class="features__inner">
        <h2 class="section__title">What Calm Offers</h2>
        <p class="section__subtitle">Everything you need to feel better, sleep better, and live better.</p>
        ${featuresHtml}
      </div>
    </section>
  `
}

export { FEATURES }
