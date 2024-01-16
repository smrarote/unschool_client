export interface success {
  code: number;
  success: boolean;
  message: string;
}

export interface fail {
  code: number;
  success: boolean;
  message: string;
  name: string;
  stack?: string;
}
