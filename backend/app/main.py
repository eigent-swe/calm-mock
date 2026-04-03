"""Calm.com mock backend API."""
from typing import Optional
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from app.data import ARTICLES, FEATURES, TESTIMONIALS, PRICING

app = FastAPI(title="Calm.com Mock API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
def health_check() -> dict:
    """Health check endpoint."""
    return {"status": "ok", "service": "calm-mock-api"}


@app.get("/api/articles")
def get_articles(category: Optional[str] = Query(None)) -> dict:
    """Get blog articles, optionally filtered by category."""
    articles = ARTICLES
    if category:
        articles = [a for a in articles if a["category"].lower() == category.lower()]
    return {"articles": articles, "total": len(articles)}


@app.get("/api/articles/{slug}")
def get_article(slug: str) -> dict:
    """Get a single article by slug."""
    article = next((a for a in ARTICLES if a["slug"] == slug), None)
    if article is None:
        raise HTTPException(status_code=404, detail="Article not found")
    return {"article": article}


@app.get("/api/features")
def get_features() -> dict:
    """Get feature sections data."""
    return {"features": FEATURES}


@app.get("/api/testimonials")
def get_testimonials() -> dict:
    """Get testimonials data."""
    return {"testimonials": TESTIMONIALS}


@app.get("/api/pricing")
def get_pricing() -> dict:
    """Get pricing plans data."""
    return {"plans": PRICING}
