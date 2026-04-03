import { describe, it, expect } from 'vitest'
import { createTestimonials, TESTIMONIALS } from './testimonials.js'

describe('createTestimonials', () => {
  it('should render all testimonials', () => {
    const html = createTestimonials()
    TESTIMONIALS.forEach(t => {
      expect(html).toContain(t.name)
      expect(html).toContain(t.quote)
    })
  })

  it('should include star ratings', () => {
    const html = createTestimonials()
    expect(html).toContain('testimonial__star--filled')
  })

  it('should include section title', () => {
    const html = createTestimonials()
    expect(html).toContain('What Our Users Say')
  })

  it('should include user roles', () => {
    const html = createTestimonials()
    expect(html).toContain('Teacher')
    expect(html).toContain('Software Engineer')
    expect(html).toContain('Healthcare Worker')
  })

  it('should export TESTIMONIALS data', () => {
    expect(TESTIMONIALS).toHaveLength(3)
  })
})
