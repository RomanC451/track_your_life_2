import { useRef } from "react";
import { useAnimationControls } from "framer-motion";

const useAnimation = (animationSteps, defaultProps = null) => {
  const animationRef = useAnimationControls();

  function startAnimation(currentAnimationStep, callback = null) {
    var props = { ...defaultProps, ...animationSteps[currentAnimationStep] };

    animationRef.start(props).then(() => {
      if (callback) {
        callback();
      }
    });
  }

  return [animationRef, startAnimation];
};

export default useAnimation;
