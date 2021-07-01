import axios from 'axios';

const api = axios.create({ baseURL: 'http://52.79.237.167:8000' });

export const FilterApi = string => api.get(`/products${string}`);

export const RegionApi = () => api.get(`/products/regions`);

export const SlideApi = () => api.get(`/products`);
