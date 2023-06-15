const getItem = (key: string) => {
  if (!localStorage) {
    throw new Error("LocalStorage is not available.");
  }

  const item = localStorage.getItem(key);
  if (item) {
    try {
      return JSON.parse(item);
    } catch (error) {
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
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
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
