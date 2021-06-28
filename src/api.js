import axios from 'axios';

const api = axios.create({ baseURL: 'http://10.58.3.102:8000' });

export const FilterApi = string => api.get(`/products${string}`);
