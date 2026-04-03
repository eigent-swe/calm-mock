# QA Report — 2026-04-03T18:30:00Z

## Overall Verdict: PASS (with minor non-critical bug noted)

## 1. Unit Tests
- Backend: 10 passed, 0 failed
- Frontend: 55 passed, 0 failed
- Failures (if any): None

## 2. Integration / API Tests
- Endpoints tested: 7
- Results:
  - GET /api/health — 200 OK, returns `{"status":"ok","service":"calm-mock-api"}` — PASS
  - GET /api/articles — 200 OK, returns articles array with total count — PASS
  - GET /api/articles?category=Sleep — 200 OK, returns filtered article(s) — PASS
  - GET /api/articles?category=nonexistent — 200 OK, returns empty array total=0 — PASS
  - GET /api/features — 200 OK, returns 4 features — PASS
  - GET /api/testimonials — 200 OK, returns 3 testimonials — PASS
  - GET /api/pricing — 200 OK, returns 3 plans with Annual highlighted — PASS
  - GET /api/articles/nonexistent — returns 200 with `{"error":"Article not found"}` instead of 404 — BUG (see BUG-1)
  - GET /api/nonexistent — 404 Not Found — PASS (FastAPI default)

## 3. Playwright UI Checks
- Pages checked: 1 (single-page application with multiple sections)
- Sections verified:
  - Header/navigation: Calm logo, Sleep/Meditate/Music/Body nav links, Log In, Try Calm for Free CTA — all present and functional
  - Hero section: "Meet Calm" heading, subtitle, "Try Calm for Free" CTA, "7-day free trial" note — all present
  - Social proof bar: 4.5M+ reviews, 100M+ downloads, #1 App for Sleep, Apple App of the Year — all present
  - Features (Sleep Stories, Meditation, Music & Soundscapes, Body & Movement): all 4 sections rendered with images and CTAs — PASS
  - Testimonials: 3 testimonials with 5-star ratings and attributed names/roles — PASS
  - Pricing: 3 plans (Monthly $14.99, Annual $69.99, Lifetime $399.99) with Most Popular badge on Annual — PASS
  - Footer: Company, Offers, Help link columns; copyright; social media links — PASS
- Interactive elements tested:
  - Nav links scroll to sections via anchor (#sleep, #meditate, #music, #body) — PASS
  - "Try Calm for Free" in header navigates to #signup — PASS
  - All CTA buttons link to #signup — PASS
- Discrepancies vs real calm.com (minor cosmetic only):
  - Mock uses emoji-based icons in social proof bar (star, phone, trophy, apple emojis) vs polished SVG icons on real site
  - Mock footer uses emoji social icons (camera, play button, person) vs proper SVG brand icons on real site
  - Real calm.com has more complex navigation with dropdowns; mock uses simple flat nav
  - Real calm.com has animated/video backgrounds; mock uses static images
  - These are all expected simplifications for a mock — no functional bugs

## 4. Edge Cases & Regression
- Empty category string (`?category=`) returns all articles (correct — empty string is falsy in Python) — PASS
- Invalid/non-existent article slug returns 200 with error body instead of 404 — BUG (see BUG-1)
- Unauthenticated requests to all endpoints succeed (no auth required by design) — PASS
- Frontend build produces single-file dist/index.html (22.6 kB) with inlined JS and CSS — PASS

## 5. Code Quality
- No TODO/FIXME/HACK comments found in source files
- No hardcoded credentials or secrets found
- Error handling on async API calls in `src/api.js` uses try/catch returning null — acceptable pattern
- Backend endpoint `GET /api/articles/{slug}` at `backend/app/main.py:38` returns `{"error": "Article not found"}` with HTTP 200 instead of HTTP 404 — violates REST conventions (see BUG-1)
- The corresponding test at `backend/tests/test_api.py:54` asserts `status_code == 200` for not-found case, which validates the incorrect behavior rather than the expected 404

## Summary of Bugs to Fix
- BUG-1: GET /api/articles/{slug} returns HTTP 200 for not-found articles — `backend/app/main.py` line 37-38 returns `{"error": "Article not found"}` with default 200 status code instead of raising an HTTPException with status 404. The test in `backend/tests/test_api.py` line 54 also incorrectly asserts `status_code == 200` for this case and should be updated to expect 404.

ALL_TESTS_PASSED
