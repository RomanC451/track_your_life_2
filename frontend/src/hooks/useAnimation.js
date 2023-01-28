import { useAnimationControls } from "framer-motion";

const useAnimation = (animationSteps, defaultProps = null) => {
  const animationRef = useAnimationControls();

  async function startAnimation(currentAnimationStep, callback = null) {
    var props = { ...defaultProps, ...animationSteps[currentAnimationStep] };

    await animationRef.start(props).then(() => {
      if (callback) {
        callback();
      }
    });
  }

  return [animationRef, startAnimation];
};

export default useAnimation;
