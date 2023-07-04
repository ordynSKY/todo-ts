const HTTP_STATUS_CODE = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

const WRONG_LOGIN_MESSAGE: string = "Wrong email or Password";

const USER_EXIST_MESSAGE: string = "User already exists";

const INTERNAL_ERROR_MESSAGE: string = "Unexpected error";

const BAD_REQUEST_MESSAGE: string = "Bad request";

export {
  HTTP_STATUS_CODE,
  WRONG_LOGIN_MESSAGE,
  USER_EXIST_MESSAGE,
  INTERNAL_ERROR_MESSAGE,
  BAD_REQUEST_MESSAGE,
};
