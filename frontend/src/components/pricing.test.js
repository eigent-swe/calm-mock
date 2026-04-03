import { describe, it, expect } from 'vitest'
import { createPricing, PLANS } from './pricing.js'

describe('createPricing', () => {
  it('should render all three plans', () => {
    const html = createPricing()
    expect(html).toContain('Monthly')
    expect(html).toContain('Annual')
    expect(html).toContain('Lifetime')
  })

  it('should show plan prices', () => {
    const html = createPricing()
    expect(html).toContain('$14.99')
    expect(html).toContain('$69.99')
    expect(html).toContain('$399.99')
  })

  it('should highlight the annual plan', () => {
    const html = createPricing()
    expect(html).toContain('Most Popular')
    expect(html).toContain('pricing-card--highlighted')
  })

  it('should include feature lists', () => {
    const html = createPricing()
    expect(html).toContain('Sleep Stories')
    expect(html).toContain('Guided Meditation')
  })

  it('should include section title', () => {
    const html = createPricing()
    expect(html).toContain('Start Your Journey to Calm')
  })

  it('should export PLANS data', () => {
    expect(PLANS).toHaveLength(3)
    expect(PLANS[1].highlighted).toBe(true)
  })
})
