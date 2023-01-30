import { useRef } from "react";

/**
 * Description - Creates an object with useRefs for desired keys passed as arguments.
 * @param {{[key: string]: (string|number)}} data={} - The object with the desired keys and corresponding values.
 * @returns {[({[key: string]: import("react").MutableRefObject}|{}), (event: (React.ChangeEvent<HTMLInputElement>|any)) => void]}} - Returns an object of refs.
 */
const useObjectOfRefs = (data = {}) => {
  const refsObject = {};
  Object.keys(data).forEach((key) => {
    refsObject[key] = useRef(data[key]);
  });

  /**
   * Handle the change event of a form input element.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event of the input element.
   * @returns {void}
   */
  function handleChange(event) {
    const { name, value } = event.target;
    refsObject[name].current = value;
  }

  return [refsObject, handleChange];
};

export default useObjectOfRefs;
