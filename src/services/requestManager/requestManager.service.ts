/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse, AxiosError } from 'axios';
export default class RequestManager<T> {
  private client = axios;
  public headers: object = {
    'Content-Type': 'application/json',
  };
  public body: object | null;
  public path: string | '/';
  constructor(path: string | '/', headers: object | null, token: string | null, body: object | null) {
    this.headers = {
      ...headers,
      ...this.headers,
      ...(token && {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
    this.body = body;
    this.path = path;
  }
  //   async get(): Promise<[success: number, data: object | null]> {}
  async post(): Promise<{ success: boolean; response: T | AxiosError }> {
    return this.client
      ?.post(this.path, this.body, { headers: this.headers })
      .then((data: AxiosResponse) => {
        return { success: true, response: data.data };
      })
      .catch((error: AxiosError) => {
        return { success: false, response: error };
      });
  }
  //   async delete(): Promise<[success: number, data: object | null]> {}
  //   async put(): Promise<[success: number, data: object | null]> {}
}
