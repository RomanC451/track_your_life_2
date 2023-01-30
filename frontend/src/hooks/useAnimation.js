import { useAnimationControls } from "framer-motion";

/**
 * Description - Creates the animation controler with desired props and provides the animatio9n start function.
 * @param {Array<Object>} animationSteps - An array of animation steps, where each step is an object with the animation properties
 * @param {Array<Object>} defaultProps=null - The default props for the animation
 * @returns {[import("framer-motion").AnimationControls, (arg0: number, arg1: Function) => Promise<void>]} returns the animation controler ref and the animation start function
 */
const useAnimation = (animationSteps, defaultProps = null) => {
  const animationRef = useAnimationControls();

  /**
   * Starts an animation with the specified step and callback function.
   *
   * @param {number} currentAnimationStep - The current step of the animation.
   * @param {Function} [callback=null] - A callback function to be executed after the animation is finished.
   *
   * @returns {Promise<void>}
   */
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
