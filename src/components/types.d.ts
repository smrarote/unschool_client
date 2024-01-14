import { AxiosResponse, AxiosError } from 'axios';

export type ApiResponse = { success: boolean; response: AxiosResponse | AxiosError };
