import axios, { AxiosResponse, Method } from "axios";
import { API_BASEURL } from "../exports";

const api = axios.create({
  baseURL: API_BASEURL,
});

const HTTPRequest = <T>(
  method: Method,
  url: string,
  data: any,
  headers?: any
): Promise<AxiosResponse<T>> => {
  return api.request<T>({
    method,
    url,
    data,
    headers,
  });
};

export default HTTPRequest;
