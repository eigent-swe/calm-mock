import { describe, it, expect } from 'vitest'
import { createFooter, FOOTER_LINKS, SOCIAL_LINKS } from './footer.js'

describe('createFooter', () => {
  it('should render column titles', () => {
    const html = createFooter()
    expect(html).toContain('Company')
    expect(html).toContain('Offers')
    expect(html).toContain('Help')
  })

  it('should render company links', () => {
    const html = createFooter()
    expect(html).toContain('About')
    expect(html).toContain('Careers')
    expect(html).toContain('Press')
    expect(html).toContain('Blog')
  })

  it('should render help links', () => {
    const html = createFooter()
    expect(html).toContain('FAQ')
    expect(html).toContain('Contact')
    expect(html).toContain('Privacy Policy')
  })

  it('should include social media links', () => {
    const html = createFooter()
    expect(html).toContain('Instagram')
    expect(html).toContain('YouTube')
    expect(html).toContain('Facebook')
  })

  it('should include copyright text', () => {
    const html = createFooter()
    expect(html).toContain('Copyright')
    expect(html).toContain('Calm. All rights reserved')
  })

  it('should include Calm logo', () => {
    const html = createFooter()
    expect(html).toContain('footer__logo')
  })

  it('should export data structures', () => {
    expect(Object.keys(FOOTER_LINKS)).toHaveLength(3)
    expect(SOCIAL_LINKS).toHaveLength(3)
  })
})
