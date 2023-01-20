import { useAnimation, useIndexIterator, useWaitCallback } from "~/hooks/";

const cardAnimationProps = {
  transition: { type: "spring", duration: 1.5 },
};

const cardAnimationSteps = [{ x: 345 }, { x: 0 }];

const useCardAnimation = (startingStep) => {
  const [canStartAnimation, resetAnimationTimer] = useWaitCallback();
  const [currentStep, nextStep, prevStep] = useIndexIterator(
    cardAnimationSteps.length,
    startingStep
  );
  const [cardAnimationRef, startAnimation] = useAnimation(
    cardAnimationSteps,
    cardAnimationProps
  );

  function startCardAnimation(callback) {
    if (!canStartAnimation()) {
      return;
    }

    startAnimation(currentStep.current, () => {
      callback();
      nextStep();
      resetAnimationTimer();
    });
  }
  return [cardAnimationRef, startCardAnimation];
};

export default useCardAnimation;
