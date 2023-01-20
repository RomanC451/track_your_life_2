import { useRef } from "react";

const useWaitCallback = () => {
  const inProgress = useRef(false);

  function canCall() {
    if (!inProgress.current) {
      inProgress.current = true;
      return true;
    } else {
      return false;
    }
  }

  function reset() {
    inProgress.current = false;
  }

  return [canCall, reset];
};

export default useWaitCallback;
