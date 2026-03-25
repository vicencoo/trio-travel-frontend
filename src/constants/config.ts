export const DEFAULT_URL =
  window.location.hostname === 'localhost'
    ? import.meta.env.VITE_LOCAL
    : import.meta.env.VITE_NETWORK;
