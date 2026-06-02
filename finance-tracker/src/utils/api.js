const BASE_URL = "https://budgetpalfinal-2.onrender.com";

export function getToken() {
  return localStorage.getItem("token");
}

export function api(path, options = {}) {
  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers
  };

  const url = path.startsWith("http") ? path : `${BASE_URL}${path}`;

  return fetch(url, { ...options, headers });
}
