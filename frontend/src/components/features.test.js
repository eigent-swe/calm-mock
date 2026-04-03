import { describe, it, expect } from 'vitest'
import { createFeatures, FEATURES } from './features.js'

describe('createFeatures', () => {
  it('should render all four features', () => {
    const html = createFeatures()
    expect(html).toContain('Sleep Stories')
    expect(html).toContain('Meditation')
    expect(html).toContain('Music & Soundscapes')
    expect(html).toContain('Body & Movement')
  })

  it('should include feature descriptions', () => {
    const html = createFeatures()
    expect(html).toContain('bedtime stories')
    expect(html).toContain('daily meditation')
  })

  it('should include CTA buttons for each feature', () => {
    const html = createFeatures()
    expect(html).toContain('Explore Sleep')
    expect(html).toContain('Start Meditating')
    expect(html).toContain('Listen Now')
    expect(html).toContain('Get Moving')
  })

  it('should use real image assets', () => {
    const html = createFeatures()
    expect(html).toContain('/assets/sleep-bg.jpg')
    expect(html).toContain('/assets/meditate-bg.jpg')
    expect(html).toContain('/assets/music-bg.jpg')
    expect(html).toContain('/assets/body-bg.jpg')
  })

  it('should have alternating layout for even/odd features', () => {
    const html = createFeatures()
    expect(html).toContain('feature--reversed')
  })

  it('should have correct anchor IDs', () => {
    const html = createFeatures()
    expect(html).toContain('id="sleep"')
    expect(html).toContain('id="meditate"')
    expect(html).toContain('id="music"')
    expect(html).toContain('id="body"')
  })

  it('should export FEATURES data', () => {
    expect(FEATURES).toHaveLength(4)
    expect(FEATURES[0].id).toBe('sleep')
  })
})
