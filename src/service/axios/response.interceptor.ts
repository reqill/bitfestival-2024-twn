import { AxiosResponse, isCancel } from 'axios';

export const onResponseFulfilled = <T, D>(response: AxiosResponse<T, D>): T => {
  // extract data from response
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onResponseRejected = (error: any) => {
  if (isCancel(error)) {
    // don't throw error if request was canceled
    console.log('Request canceled', error.message);
    return;
  }

  return Promise.reject(error);
};
