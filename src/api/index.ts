import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({ baseURL: import.meta.env.VITE_API_URL, headers: { Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN} ` }})

export default api

export const imageURL: string = import.meta.env.VITE_IMAGE_URL