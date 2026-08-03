const API_BASE_URL = import.meta.env.VITE_CMS_API_URL ?? 'http://127.0.0.1:8000/api/v1';

export async function fetchComproContent() {
  const response = await fetch(`${API_BASE_URL}/cms/compro`, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`CMS API returned ${response.status}`);
  }

  const payload = await response.json();
  return payload.data ?? payload;
}

