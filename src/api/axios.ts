const DEFAULT_URL = 'https://trio-travel-frontend-vercel-henna.vercel.app';
import AXIOS from 'axios';
import type { NavigateFunction } from 'react-router-dom';

export const axios = AXIOS.create({
  baseURL: DEFAULT_URL,
  withCredentials: true,
});

let isRefreshing = false;

export const setUpInterceptors = (navigate: NavigateFunction) => {
  axios.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (
        (error.response?.status === 401 || error.response?.status === 403) &&
        !originalRequest._retry && // ← guard: don't retry more than once
        !originalRequest.url.includes('/refresh-access-token') // ← guard: skip refresh endpoint
      ) {
        if (isRefreshing) return Promise.reject(error);

        isRefreshing = true;
        originalRequest._retry = true;

        try {
          const res = await axios.post('/refresh-access-token');
          if (res.data) {
            localStorage.setItem('accessToken', res.data.accessToken);
            originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
            isRefreshing = false;
            return axios(originalRequest); // ← retry the original request
          }
        } catch (err) {
          isRefreshing = false;
          localStorage.removeItem('accessToken');
          navigate('/authenticate'); // ← now this will actually be reached
          return Promise.reject(err);
        }
      }

      return Promise.reject(error);
    },
  );
};
