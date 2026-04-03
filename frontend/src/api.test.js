import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchArticles, fetchArticle, fetchFeatures, fetchTestimonials, fetchPricing, API_BASE } from './api.js'

describe('API client', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('should fetch articles successfully', async () => {
    const mockData = { articles: [{ id: '1', title: 'Test' }], total: 1 }
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    })

    const result = await fetchArticles()
    expect(result).toEqual(mockData)
    expect(fetch).toHaveBeenCalledWith(`${API_BASE}/articles`)
  })

  it('should fetch articles with category filter', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ articles: [], total: 0 }),
    })

    await fetchArticles('Sleep')
    expect(fetch).toHaveBeenCalledWith(`${API_BASE}/articles?category=Sleep`)
  })

  it('should fetch a single article by slug', async () => {
    const mockArticle = { article: { slug: 'test', title: 'Test' } }
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockArticle),
    })

    const result = await fetchArticle('test')
    expect(result).toEqual(mockArticle)
    expect(fetch).toHaveBeenCalledWith(`${API_BASE}/articles/test`)
  })

  it('should return null on fetch error', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'))

    const result = await fetchArticles()
    expect(result).toBeNull()
  })

  it('should return null on non-ok response', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
    })

    const result = await fetchFeatures()
    expect(result).toBeNull()
  })

  it('should fetch features', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ features: [] }),
    })

    const result = await fetchFeatures()
    expect(result).toEqual({ features: [] })
  })

  it('should fetch testimonials', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ testimonials: [] }),
    })

    const result = await fetchTestimonials()
    expect(result).toEqual({ testimonials: [] })
  })

  it('should fetch pricing', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ plans: [] }),
    })

    const result = await fetchPricing()
    expect(result).toEqual({ plans: [] })
  })
})
