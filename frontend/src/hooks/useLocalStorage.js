import { useState } from "react";
import { isNumeric } from "../utils";

const useLocalStorage = (varName, defaultValue) => {
  var storagedValue = localStorage.getItem(varName);
  if (storagedValue === null) {
    localStorage.setItem(varName, defaultValue);
  } else if (isNumeric(storagedValue)) {
    storagedValue = parseInt(storagedValue);
  }

  const [value, setValueToLocalStorage] = useState(
    storagedValue !== null ? storagedValue : defaultValue
  );

  function setValue(newValue) {
    localStorage.setItem(varName, newValue);
    setValueToLocalStorage(newValue);
  }

  return [value, setValue];
};

export default useLocalStorage;
