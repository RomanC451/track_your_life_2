import React, { useRef, useEffect } from "react";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

import { useIndexIterator, useWaitCallback } from "~/hooks";

import SliderComponent from "./SliderComponent";

const Slider = ({
  width,
  className,
  sliderComponents,
  showedComponentIndex,
}) => {
  const [canStartAnimation, resetAnimationTimer] = useWaitCallback();
  const [currentComponentIndex, nextIndex, prevIndex] = useIndexIterator(
    sliderComponents.length,
    showedComponentIndex,
    false
  );

  const componentsRef = useRef([]);

  sliderComponents.forEach(() => {
    componentsRef.current.push(useRef(null));
  });

  function handleRightButton() {
    if (!canStartAnimation()) {
      return;
    }
    if (currentComponentIndex.current === sliderComponents.length - 1) {
      resetAnimationTimer();
      return;
    } else if (currentComponentIndex.current < sliderComponents.length - 1) {
      componentsRef.current[
        currentComponentIndex.current
      ].current.startSlideAnimation("left", () => {
        nextIndex();
        resetAnimationTimer();
      });
      componentsRef.current[
        currentComponentIndex.current + 1
      ].current.startSlideAnimation("left", () => {});
    } else {
      componentsRef.current[
        currentComponentIndex.current
      ].current.startSlideAnimation("left", () => {
        nextIndex();
        resetAnimationTimer();
      });
    }
  }

  function handleLeftButton() {
    if (!canStartAnimation()) {
      return;
    }
    if (currentComponentIndex.current === 0) {
      resetAnimationTimer();
      return;
    } else if (currentComponentIndex.current > 0) {
      componentsRef.current[
        currentComponentIndex.current
      ].current.startSlideAnimation("right", () => {
        prevIndex();
        resetAnimationTimer();
      });
      componentsRef.current[
        currentComponentIndex.current - 1
      ].current.startSlideAnimation("right", () => {});
    } else {
      componentsRef.current[
        currentComponentIndex.current
      ].current.startSlideAnimation("right", () => {
        prevIndex();
        resetAnimationTimer();
      });
    }
  }

  function getComponentPosition(index) {
    var position;
    if (index === currentComponentIndex.current) {
      position = "ceneter";
    } else if (index > currentComponentIndex.current) {
      position = "right";
    } else {
      position = "left";
    }

    return position;
  }

  return (
    <div className={`relative overflow-hidden ${className} flex items-end`}>
      {sliderComponents.map((component, index) => {
        return (
          <SliderComponent
            key={index}
            pos={getComponentPosition(index)}
            sliderWidth={width}
            component={component}
            ref={componentsRef.current[index]}
          ></SliderComponent>
        );
      })}
      <div className={` flex w-[90%] justify-end gap-2`}>
        <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full hover:bg-slate-100 hover:shadow-lg">
          <button
            type="button"
            onClick={handleLeftButton}
            className="text-3xl"
            style={{ color: "gray" }}
          >
            <IoIosArrowDropleft />
          </button>
        </div>
        <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full hover:bg-slate-100 hover:shadow-lg">
          <button
            type="button"
            onClick={handleRightButton}
            className="text-3xl"
            style={{ color: "gray" }}
          >
            <IoIosArrowDropright />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
