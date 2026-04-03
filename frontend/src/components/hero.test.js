import { describe, it, expect } from 'vitest'
import { createHero } from './hero.js'

describe('createHero', () => {
  it('should return hero HTML with title', () => {
    const html = createHero()
    expect(html).toContain('Meet Calm')
  })

  it('should include subtitle', () => {
    const html = createHero()
    expect(html).toContain('#1 app for sleep')
  })

  it('should include CTA button', () => {
    const html = createHero()
    expect(html).toContain('Try Calm for Free')
  })

  it('should include free trial note', () => {
    const html = createHero()
    expect(html).toContain('7-day free trial')
  })

  it('should have overlay element', () => {
    const html = createHero()
    expect(html).toContain('hero__overlay')
  })
})
