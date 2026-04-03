import { describe, it, expect, beforeEach } from 'vitest'
import { createHeader, initHeader } from './header.js'

describe('createHeader', () => {
  it('should return header HTML string', () => {
    const html = createHeader()
    expect(html).toContain('header')
    expect(html).toContain('Calm')
  })

  it('should include navigation links', () => {
    const html = createHeader()
    expect(html).toContain('Sleep')
    expect(html).toContain('Meditate')
    expect(html).toContain('Music')
    expect(html).toContain('Body')
  })

  it('should include CTA button', () => {
    const html = createHeader()
    expect(html).toContain('Try Calm for Free')
  })

  it('should include login link', () => {
    const html = createHeader()
    expect(html).toContain('Log In')
  })

  it('should include hamburger menu button', () => {
    const html = createHeader()
    expect(html).toContain('menu-toggle')
    expect(html).toContain('aria-expanded="false"')
  })
})

describe('initHeader', () => {
  beforeEach(() => {
    document.body.innerHTML = createHeader()
  })

  it('should initialize without errors', () => {
    expect(() => initHeader()).not.toThrow()
  })

  it('should toggle mobile menu on hamburger click', () => {
    initHeader()
    const toggle = document.getElementById('menu-toggle')
    const header = document.getElementById('site-header')

    toggle.click()
    expect(header.classList.contains('header--menu-open')).toBe(true)
    expect(toggle.getAttribute('aria-expanded')).toBe('true')

    toggle.click()
    expect(header.classList.contains('header--menu-open')).toBe(false)
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
  })

  it('should not crash when elements are missing', () => {
    document.body.innerHTML = ''
    expect(() => initHeader()).not.toThrow()
  })
})
