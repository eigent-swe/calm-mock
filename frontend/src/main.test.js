import { describe, it, expect, beforeEach } from 'vitest'
import { initApp } from './main.js'

describe('initApp', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>'
  })

  it('should render the calm app container', () => {
    initApp()
    const app = document.querySelector('.calm-app')
    expect(app).not.toBeNull()
  })

  it('should render the header with logo', () => {
    initApp()
    const logo = document.querySelector('.header__logo')
    expect(logo).not.toBeNull()
  })

  it('should render navigation links', () => {
    initApp()
    const navLinks = document.querySelectorAll('.header__nav-link')
    expect(navLinks.length).toBe(4)
    expect(navLinks[0].textContent).toBe('Sleep')
    expect(navLinks[1].textContent).toBe('Meditate')
    expect(navLinks[2].textContent).toBe('Music')
    expect(navLinks[3].textContent).toBe('Body')
  })

  it('should render the hero section', () => {
    initApp()
    const hero = document.querySelector('.hero')
    expect(hero).not.toBeNull()
    const heading = hero.querySelector('h1')
    expect(heading.textContent).toBe('Meet Calm')
  })

  it('should render the CTA button', () => {
    initApp()
    const cta = document.querySelector('.hero__cta')
    expect(cta).not.toBeNull()
    expect(cta.textContent).toBe('Try Calm for Free')
  })

  it('should not crash if #app element is missing', () => {
    document.body.innerHTML = ''
    expect(() => initApp()).not.toThrow()
  })
})
