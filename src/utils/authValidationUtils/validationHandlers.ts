import { regexValidator } from "./regexConfig";

const validationHandler = (fieldName: string, value: string, callback: any) => {
  if (!value) return true;

  if (fieldName === "username") {
    const res = /^[a-zA-Z\-]+$/.exec(value);

    const valid = !!res;

    if (!valid) {
      callback("Please enter a valid Username");

      return false;
    }

    callback("");

    return true;
  }

  if (fieldName === "email") {
    const res = regexValidator;

    if (!res.test(String(value).toLowerCase())) {
      callback("Please enter a valid Email");

      return false;
    }

    callback("");

    return true;
  }

  if (fieldName === "password") {
    if (value.length < 3 || value.length > 8) {
      callback("Please type more whan 3 and less whan 8 symbols");

      return false;
    }

    callback("");

    return true;
  }
};

export default validationHandler;
