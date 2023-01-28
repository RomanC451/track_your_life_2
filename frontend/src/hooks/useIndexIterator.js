import { useRef } from "react";

const useIndexIterator = (arrayLength, startingIndex, continuos = true) => {
  if (startingIndex >= arrayLength) {
    throw new Error("Starting index must be less than array length");
  }

  const index = useRef(startingIndex);

  const next = () => {
    if (index.current < arrayLength - 1) {
      index.current += 1;
    } else if (continuos) {
      index.current = 0;
    }
  };

  const previous = () => {
    if (index.current > 0) {
      index.current -= 1;
    } else if (continuos) {
      index.current = arrayLength - 1;
    }
  };
  return [index, next, previous];
};

export default useIndexIterator;
