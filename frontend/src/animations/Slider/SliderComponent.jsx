import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { motion } from "framer-motion";

import { useIndexIterator, useAnimation } from "~/hooks";

const sliderAnimationProps = {
  transition: { type: "spring", duration: 1 },
};

const SliderComponent = forwardRef(({ component, sliderWidth, pos }, ref) => {
  const sliderAnimationSteps = [
    { x: -sliderWidth },
    { x: 0 },
    { x: sliderWidth },
  ];

  var initialPos = 0;
  var currentStep = 1;
  if (pos === "right") {
    initialPos = sliderWidth;
    currentStep = 2;
  } else if (pos === "left") {
    initialPos = 0 - sliderWidth;
    currentStep = 1;
  }

  const [currentindex, nextStep, prevStep] = useIndexIterator(
    sliderAnimationSteps.length,
    currentStep,
    false
  );

  const [slideAnimationRef, startAnimation] = useAnimation(
    sliderAnimationSteps,
    sliderAnimationProps
  );

  useImperativeHandle(ref, () => ({
    startSlideAnimation(direction, callback) {
      if (direction === "right") {
        nextStep();
      } else if (direction === "left") {
        prevStep();
      }

      startAnimation(currentindex.current, () => {
        callback();
      });
    },
  }));

  return (
    <motion.div
      className={`absolute top-0  float-left flex w-full flex-col items-center`}
      transition={{ duration: 5 }}
      animate={slideAnimationRef}
      initial={{ x: initialPos }}
    >
      {component}
    </motion.div>
  );
});

export default SliderComponent;
