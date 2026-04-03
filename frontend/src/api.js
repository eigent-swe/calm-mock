/**
 * API client for the Calm.com mock backend
 */

const API_BASE = '/api'

/**
 * Generic fetch helper with error handling
 * @param {string} endpoint - API endpoint path
 * @returns {Promise<object|null>} Response data or null on error
 */
async function fetchApi(endpoint) {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`)
    if (!response.ok) {
      return null
    }
    return await response.json()
  } catch {
    return null
  }
}

/**
 * Fetch all articles, optionally filtered by category
 * @param {string} [category] - Optional category filter
 * @returns {Promise<object|null>}
 */
export async function fetchArticles(category) {
  const query = category ? `?category=${encodeURIComponent(category)}` : ''
  return fetchApi(`/articles${query}`)
}

/**
 * Fetch a single article by slug
 * @param {string} slug - Article slug
 * @returns {Promise<object|null>}
 */
export async function fetchArticle(slug) {
  return fetchApi(`/articles/${slug}`)
}

/**
 * Fetch features data
 * @returns {Promise<object|null>}
 */
export async function fetchFeatures() {
  return fetchApi('/features')
}

/**
 * Fetch testimonials data
 * @returns {Promise<object|null>}
 */
export async function fetchTestimonials() {
  return fetchApi('/testimonials')
}

/**
 * Fetch pricing data
 * @returns {Promise<object|null>}
 */
export async function fetchPricing() {
  return fetchApi('/pricing')
}

export { fetchApi, API_BASE }
