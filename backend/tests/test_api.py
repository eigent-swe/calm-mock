"""Tests for the Calm.com mock API endpoints."""
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_health_check():
    """Health check should return ok status."""
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"


def test_get_articles():
    """Should return all articles."""
    response = client.get("/api/articles")
    assert response.status_code == 200
    data = response.json()
    assert "articles" in data
    assert data["total"] > 0
    assert len(data["articles"]) == data["total"]


def test_get_articles_by_category():
    """Should filter articles by category."""
    response = client.get("/api/articles?category=Sleep")
    assert response.status_code == 200
    data = response.json()
    for article in data["articles"]:
        assert article["category"].lower() == "sleep"


def test_get_articles_empty_category():
    """Should return empty list for non-existent category."""
    response = client.get("/api/articles?category=nonexistent")
    assert response.status_code == 200
    data = response.json()
    assert data["total"] == 0


def test_get_article_by_slug():
    """Should return a single article by slug."""
    response = client.get("/api/articles/belly-breathing")
    assert response.status_code == 200
    data = response.json()
    assert "article" in data
    assert data["article"]["slug"] == "belly-breathing"


def test_get_article_not_found():
    """Should return error for non-existent slug."""
    response = client.get("/api/articles/nonexistent")
    assert response.status_code == 200
    data = response.json()
    assert "error" in data


def test_get_features():
    """Should return features list."""
    response = client.get("/api/features")
    assert response.status_code == 200
    data = response.json()
    assert "features" in data
    assert len(data["features"]) == 4


def test_get_testimonials():
    """Should return testimonials list."""
    response = client.get("/api/testimonials")
    assert response.status_code == 200
    data = response.json()
    assert "testimonials" in data
    assert len(data["testimonials"]) == 3


def test_get_pricing():
    """Should return pricing plans."""
    response = client.get("/api/pricing")
    assert response.status_code == 200
    data = response.json()
    assert "plans" in data
    assert len(data["plans"]) == 3
    # Annual plan should be highlighted
    annual = next(p for p in data["plans"] if p["name"] == "Annual")
    assert annual["highlighted"] is True
