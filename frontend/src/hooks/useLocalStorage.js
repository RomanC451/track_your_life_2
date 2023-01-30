import { useState } from "react";
import { isNumeric } from "../utils";

/**
 * Description - Used to store the value of a variable in the local storage.
 * @param {string} varName - The name of the variable.
 * @param {(string|number)} defaultValue - The default value of the variable.
 * @returns {[(string|number), (newValue: string|number) => void]} returns the state and the setter function.
 * Returns an array with two elements:
 *  - The first element is the state of the variable, which can be a string or number.
 *  - The second element is a setter function for updating the state, which takes in a string or number as an argument.
 */
const useLocalStorage = (varName, defaultValue) => {
  var storagedValue = localStorage.getItem(varName);

  const [value, setValueToLocalStorage] = useState(() => {
    if (storagedValue === null) {
      localStorage.setItem(varName, defaultValue.toString());
      return defaultValue;
    }

    if (isNumeric(storagedValue)) {
      return parseInt(storagedValue);
    }

    return storagedValue;
  });

  /**
   * Description
   * @param {(string|number)} newValue
   * @throws {Error} Will throw an error if the argument provided is not a string or a number.
   * @returns {void}
   */
  function setValue(newValue) {
    if (typeof newValue !== "string" && typeof newValue !== "number") {
      throw new Error("newValue must be a string or a number");
    }

    localStorage.setItem(varName, newValue.toString());
    setValueToLocalStorage(newValue);
  }

  return [value, setValue];
};

export default useLocalStorage;
