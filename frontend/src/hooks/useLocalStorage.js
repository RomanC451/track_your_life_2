import { useState } from "react";

const useLocalStorage = ({ varName, defaultValue }) => {
  const storagedValue = localStorage.getItem(varName);

  const [value, setValue] = useState(
    storagedValue !== null ? storagedValue : defaultValue
  );

  function setValueToLocalStorage(newValue) {
    localStorage.setItem(varName, newValue);
    setValue(newValue);
  }

  return [value, setValueToLocalStorage];
};

export default useLocalStorage;
