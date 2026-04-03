# Calm.com Exploration

## Overview
Calm.com is a meditation and mental wellness app website. The main site serves as a marketing/landing page
to drive users to sign up for the Calm app. It features sections about Sleep Stories, Meditation, Music,
and other wellness content.

**Note:** The main calm.com pages are protected by a WAF (Web Application Firewall) that blocks automated
access (403 responses). Exploration was conducted via the blog (which is accessible), App Store listing,
privacy policy page, and knowledge of the site's well-known public structure.

## Pages & Routes

### 1. Homepage (`/`)
- **Hero Section**: Full-width background with nature imagery (mountains/night sky), large headline
  "Meet Calm" or similar, subheadline about meditation/sleep/relaxation, primary CTA "Try Calm for Free"
- **Social proof bar**: "4.5M+ 5-star reviews", "100M+ downloads", "Apple App of the Year"
- **Feature sections** (cards/rows):
  - Sleep Stories: celebrity narrators, bedtime stories
  - Meditation: guided sessions for all levels
  - Music: focus/relaxation/sleep playlists
  - Masterclasses: expert-led video classes
  - Body: stretching and movement exercises
- **Testimonial section**: User quotes
- **Pricing section**: Free trial CTA, plan options
- **Footer**: Multi-column links

### 2. Blog (`/blog`)
- Accessible via Squarespace
- **Header**: Calm logo (blue rounded square), nav: "Blog Home", "Free Resources", "Calm.com", "Try Calm for Free" CTA
- **Hero**: "Mental health is hard. Getting support doesn't have to be." tagline
- **Category tabs**: Meditation & Mindfulness, Stress & Anxiety, Sleep, Mental Health, Personal Growth
- **Featured articles section**: Cards with images, titles, excerpts
- **Category sections**: Each with 4 article cards + "View All" link
- **Footer**: Blog links, Calm links, social icons, copyright

### 3. Privacy Policy (`/privacy-policy`)
- Simple text page
- Title: "Privacy Policy"
- Sections: Collection of Information, Use of Information, Disclosures, Advertising, etc.
- No main site navigation visible (standalone page)

### 4. Sleep Page (`/sleep`)
- Feature page for Sleep Stories content
- Nature imagery backgrounds
- Sleep story cards with narrator names and durations

### 5. Meditate Page (`/meditate`)
- Feature page for meditation content
- Categories: Anxiety, Stress, Focus, Self-Esteem, etc.

### 6. Music Page (`/music`)
- Feature page for music/soundscape content
- Categories: Focus, Relaxation, Sleep, Nature Sounds

### 7. Sign Up / Login
- Sign up flow at `/signup-flow`
- Login form
- Social login options (Google, Apple, Facebook)

## Navigation Structure

### Main Site Header
```
[Calm Logo]  Sleep  Meditate  Music  Body    [Log In] [Try Calm for Free]
```

### Blog Header
```
[Calm Blog Logo]  Blog Home  Free Resources  Calm.com    [Try Calm for Free]
```

### Footer Links
**Blog Column:**
- Meditation & Mindfulness
- Stress & Anxiety
- Sleep
- Mental Health
- Personal Growth
- Free Resources

**Calm Column:**
- Calm.com
- About
- Contact
- FAQ
- Press
- Calm Health
- Calm Business
- Privacy Policy
- Terms
- Your Privacy Choices

**Social:**
- Instagram
- YouTube
- Facebook

**Copyright:** "Copyright 2023 Calm. All rights reserved"

## Design System

### Colors
- **Primary**: Deep navy/dark blue (#1A2740 or similar) for backgrounds
- **Accent**: Calm blue (#5B83A5 or #4A90D9) for the logo and links
- **CTA**: Blue button (#3366CC or similar)
- **Text**: White on dark, dark gray (#333) on light
- **Background**: White for content areas, dark blue for hero sections

### Typography
- Clean sans-serif fonts (likely proprietary or system fonts)
- Large hero text (40-60px), section headers (28-36px)
- Body text (16-18px)

### Logo
- Blue/teal rounded square with white "Calm" script text
- Used in header navigation

### Layout
- Full-width sections
- Max content width ~1200px centered
- Card-based layouts for features/articles
- 4-column grid for article cards on desktop
- Responsive: stacks to 1-2 columns on mobile

## API Endpoints
The main calm.com site uses a SPA architecture with API calls. Since this is primarily
a marketing/landing page mock, we'll use a minimal backend for:
- `/api/articles` - Blog article data
- `/api/features` - Feature content data
- `/api/testimonials` - Testimonial data

No authentication flow is needed for the mock (just UI mockup of login/signup forms).

## Data Models

### Article
```json
{
  "id": "string",
  "title": "string",
  "excerpt": "string",
  "category": "string",
  "date": "string",
  "image": "string",
  "slug": "string"
}
```

### Feature
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "icon": "string",
  "image": "string"
}
```

## Interactive Flows
1. **Navigation**: Click nav links to scroll/navigate to sections
2. **CTA buttons**: "Try Calm for Free" triggers signup flow
3. **Category tabs**: Filter blog articles by category
4. **Article cards**: Click to view article detail
5. **Mobile menu**: Hamburger menu for responsive nav
6. **Smooth scrolling**: Between sections on homepage

## Tech Stack Decision

**Choice: Vanilla JS + CSS (no framework)**

**Reasoning:**
- Calm.com is primarily a marketing/landing page site (L1-L2 complexity)
- The site is content-heavy with minimal interactive state
- No complex component trees, routing, or state management needed
- The blog section is category-filtered article cards (simple DOM manipulation)
- A framework would be overkill for this static/presentational content
- Vanilla JS + CSS gives the best performance for a content-focused site
- Vitest will be used for testing

## Screenshots
- `screenshots/explore_real_blog_20260403_093700.png` - Blog homepage full page
- `screenshots/explore_real_blog_sleep_20260403_093800.png` - Blog 404 page showing footer structure
- `screenshots/explore_real_privacy_20260403_093730.png` - Privacy policy page
- `screenshots/explore_real_homepage_blocked_20260403_093300.png` - Homepage blocked by WAF
