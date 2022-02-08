import axios, { CancelToken, CancelTokenSource } from 'axios';
import { LOCAL_STORAGE } from 'constants/index';

declare module 'axios' {
  export interface AxiosRequestConfig {
    noAuth?: boolean;
  }
}

axios.interceptors.request.use(
  async (config) => {
    if (config.noAuth) {
      return config;
    }
    const newConfig = config;
    const token = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);
    if (!token) {
      return config;
    }
    newConfig.headers.authorization = `Bearer ${token}`;
    return newConfig;
  },
  (err) => Promise.reject(err),
);

export interface Response<T> {
  error?: string;
  data?: T;
}

export default class AxiosRequest {
  cancelToken: CancelTokenSource;

  constructor() {
    this.cancelToken = axios.CancelToken.source();
  }

  getCancelToken(): CancelToken {
    return this.cancelToken.token;
  }

  cancel(): void {
    this.cancelToken.cancel();
  }

  refreshToken(): void {
    this.cancelToken = axios.CancelToken.source();
  }

  refresh(): void {
    this.cancel();
    this.refreshToken();
  }
}
