import { AxiosError, isAxiosError } from "axios";

export const getErrorContent = (error: unknown | Error | AxiosError) => {
  const isAxios = isAxiosError(error);
  let status: number | undefined;
  let errorMessage: string = "";

  if (isAxios) {
    const response = error.response;
    const responseData: any = response?.data;
    errorMessage = responseData?.message;
    status = response?.status ?? error.status;
  }

  if (!isAxios) errorMessage = (error as Error)?.message;

  if (!errorMessage) errorMessage = "Default error message";

  return { errorMessage, status };
};
