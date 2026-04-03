"""Tests for the health check endpoint."""
from fastapi.testclient import TestClient
from app.main import app


client = TestClient(app)


def test_health_check():
    """Health check should return ok status."""
    response = client.get("/api/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
    assert data["service"] == "calm-mock-api"
