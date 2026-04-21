const API = 'https://dev.to/api';

export async function getDevToPosts() {
  const apiKey = import.meta.env.DEV_TO_API_KEY;
  if (!apiKey) {
    console.warn('DEV_TO_API_KEY is not set');
    return [];
  }
  const response = await fetch(`${API}/articles/me/published`, {
    headers: { 'api-key': apiKey },
  });
  if (!response.ok) {
    console.error('Failed to fetch Dev.to posts:', response.status);
    return [];
  }
  return response.json();
}

export async function getDevToArticle(id) {
  const apiKey = import.meta.env.DEV_TO_API_KEY;
  const response = await fetch(`${API}/articles/${id}`, {
    headers: apiKey ? { 'api-key': apiKey } : {},
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch article ${id}: ${response.status}`);
  }
  return response.json();
}
