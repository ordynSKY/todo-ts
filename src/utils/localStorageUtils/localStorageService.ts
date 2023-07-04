import { handleErrorUtil } from "../handleErrorUtil/handleErrorUtil";

const getItem = (key: string) => {
  if (!localStorage) {
    throw new Error("LocalStorage is not available.");
  }

  const item = localStorage.getItem(key);
  if (item) {
    try {
      return item;
    } catch (error) {
      handleErrorUtil(error);
      console.error("Error parsing localStorage item:", error);
    }
  }
  return null;
};

const setItem = (key: string, value: string) => {
  if (!localStorage) {
    throw new Error("LocalStorage is not available.");
  }

  try {
    localStorage.setItem(key, value);
  } catch (error) {
    handleErrorUtil(error);
    console.error("Error serializing localStorage item:", error);
  }
};

const removeItem = (key: string) => {
  if (!localStorage) {
    throw new Error("LocalStorage is not available.");
  }

  localStorage.removeItem(key);
};

export { getItem, setItem, removeItem };
