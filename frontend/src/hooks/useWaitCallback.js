import { useRef } from "react";

/**
 * Description - Used to keep track of function calls. Prevents duplicate calls of a function.
 * @returns {[()=> boolean, () => void]} Returns a funciton which determines if a function can be called again.
 */
const useWaitCallback = () => {
  const inProgress = useRef(false);

  /**
   * Returns whether a call can be made.
   *
   * @returns {boolean} - Returns true if a call can be made, and false if a call is already in progress.
   */
  function canCall() {
    if (!inProgress.current) {
      inProgress.current = true;
      return true;
    } else {
      return false;
    }
  }

  /**
   * Resets the inProgress flag.
   *
   * @returns {void}
   */
  function reset() {
    inProgress.current = false;
  }

  return [canCall, reset];
};

export default useWaitCallback;
