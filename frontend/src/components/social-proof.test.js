import { describe, it, expect } from 'vitest'
import { createSocialProof } from './social-proof.js'

describe('createSocialProof', () => {
  it('should include all stat values', () => {
    const html = createSocialProof()
    expect(html).toContain('4.5M+')
    expect(html).toContain('100M+')
    expect(html).toContain('#1')
  })

  it('should include stat labels', () => {
    const html = createSocialProof()
    expect(html).toContain('5-star reviews')
    expect(html).toContain('downloads')
    expect(html).toContain('App for Sleep')
    expect(html).toContain('App of the Year')
  })

  it('should render four stats', () => {
    const html = createSocialProof()
    const matches = html.match(/social-proof__stat/g)
    expect(matches.length).toBe(4)
  })
})
