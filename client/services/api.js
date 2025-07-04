const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = {
  get: async (path) => {
    const res = await fetch(`${BASE_URL}${path}`);
    return res.json();
  },
  post: async (path, data) => {
    const res = await fetch(`${BASE_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.json();
  },
  put: async (path, data) => {
    const res = await fetch(`${BASE_URL}${path}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.json();
  },
  delete: async (path) => {
    const res = await fetch(`${BASE_URL}${path}`, {
      method: 'DELETE',
    });
    return res.json();
  },
};

export default api;
