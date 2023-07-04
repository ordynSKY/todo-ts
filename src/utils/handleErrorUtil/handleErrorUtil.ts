import { AxiosError } from "axios";
import {
  HTTP_STATUS_CODE,
  WRONG_LOGIN_MESSAGE,
  USER_EXIST_MESSAGE,
  INTERNAL_ERROR_MESSAGE,
  BAD_REQUEST_MESSAGE,
} from "./config";
import { getErrorContent } from "./helpers";
import { toast } from "react-toastify";

export const handleErrorUtil = (error: unknown | Error | AxiosError) => {
  const { status, errorMessage } = getErrorContent(error);

  const position = "bottom-right";

  const isNotFound = status === HTTP_STATUS_CODE.NOT_FOUND;

  const isInternalError = status === HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR;

  const isUserExist = status === HTTP_STATUS_CODE.BAD_REQUEST;

  const isWronglogin = isNotFound && errorMessage === WRONG_LOGIN_MESSAGE;

  if (isWronglogin) toast.error(WRONG_LOGIN_MESSAGE, { position });

  if (isUserExist) toast.error(USER_EXIST_MESSAGE, { position });

  if (isInternalError) toast.error(INTERNAL_ERROR_MESSAGE, { position });

  if (isNotFound) toast.error(BAD_REQUEST_MESSAGE, { position });
};
