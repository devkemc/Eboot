import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const get: <T>(url: string) => Promise<T> = async (url) => {
  const response = await api.get(url);
  const data = await response.data;
  console.log("teste listagem", data);

  return data;
};
// eslint-disable-next-line @typescript-eslint/ban-types
export const post: <T>(url: string, data: {}) => Promise<T> = async (url, data) => {
  const response = await api.post(url, data);
  const resp = await response.data;

  return resp;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const put: <T>(urlId: string, data: {}) => Promise<T> = async (url, data) => {
  const response = await api.put(url, data);
  const resp = await response.data;
  console.log(resp);

  return resp;
};

export const del: <T>(urlId: string) => Promise<T> = async (url) => {
  const response = await api.delete(url);
  const resp = await response.data;
  console.log(resp);

  return resp;
};
