import { AxiosError } from "axios";
import {
  HTTP_STATUS_CODE,
  WRONG_LOGIN_MESSAGE,
  USER_EXIST_MESSAGE,
} from "./config";
import { getErrorContent } from "./helpers";
import { toast } from "react-toastify";

export const handleErrorUtil = (error: unknown | Error | AxiosError) => {
  const { status, errorMessage } = getErrorContent(error);

  const position = "bottom-right";

  const isNotFound = status === HTTP_STATUS_CODE.NOT_FOUND;

  const isUserExist = status === HTTP_STATUS_CODE.BAD_REQUEST;

  const isWronglogin = isNotFound && errorMessage === WRONG_LOGIN_MESSAGE;

  if (isWronglogin) return toast.error(WRONG_LOGIN_MESSAGE, { position });

  if (isUserExist) return toast.error(USER_EXIST_MESSAGE, { position });
};
