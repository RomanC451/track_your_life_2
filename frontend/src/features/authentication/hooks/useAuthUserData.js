import { useRef } from "react";

const useAuthUserData = (inputs) => {
  const data = {};
  Object.keys(inputs).forEach((key) => {
    data[key] = useRef(inputs[key]);
  });

  function handleChange(event) {
    const { name, value } = event.target;
    data[name].current = value;
  }

  return [data, handleChange];
};

export default useAuthUserData;
