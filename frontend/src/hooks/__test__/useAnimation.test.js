import { render, renderHook, screen } from "@testing-library/react";
import { motion } from "framer-motion";

import useAnimation from "../useAnimation";

const MockElement = ({ animationRef, initialPos, id }) => {
  return (
    <motion.div
      animate={animationRef}
      data-testid={`animated-div-${id}`}
      initial={initialPos}
    >
      asdasdas
    </motion.div>
  );
};

function getHookReturns(animationSteps) {
  const { result } = renderHook(() => useAnimation(animationSteps));
  return result.current;
}

test("animation ref should be defined correctly", () => {
  const [animationRef, startAnimation] = getHookReturns([{ x: -200 }]);
  expect(animationRef.hasOwnProperty("subscribe")).toBe(true);
  expect(animationRef.hasOwnProperty("start")).toBe(true);
  expect(animationRef.hasOwnProperty("set")).toBe(true);
  expect(animationRef.hasOwnProperty("stop")).toBe(true);
  expect(animationRef.hasOwnProperty("mount")).toBe(true);
});

var testId = 0;

describe("vertical and horizontal movement", () => {
  function setupElement(id) {
    const [animationRef, startAnimation] = getHookReturns([
      { x: -200, y: -200 },
      { x: 0, y: 0 },
      { x: 200, y: 200 },
    ]);

    render(
      <MockElement
        animationRef={animationRef}
        initialPos={{ x: -200, y: -200 }}
        id={id}
      />
    );

    return [animationRef, startAnimation];
  }

  test("1", async () => {
    const id = testId++;
    const [animationRef, startAnimation] = setupElement(id);

    const divElement = screen.getByTestId(`animated-div-${id}`);

    expect(divElement.style.transform).toBe(
      "translateX(-200px) translateY(-200px) translateZ(0)"
    );

    await startAnimation(1, () => {
      expect(divElement.style.transform).toBe("none");
    });
  });

  test("2", async () => {
    const id = testId++;
    const [animationRef, startAnimation] = setupElement(id);

    const divElement = screen.getByTestId(`animated-div-${id}`);

    await startAnimation(2, () => {
      expect(divElement.style.transform).toBe(
        "translateX(200px) translateY(200px) translateZ(0)"
      );
    });

    await startAnimation(0, () => {
      expect(divElement.style.transform).toBe(
        "translateX(-200px) translateY(-200px) translateZ(0)"
      );
    });
  });

  describe("rotation", () => {
    function setupElement(id) {
      const [animationRef, startAnimation] = getHookReturns([
        { rotate: 150 },
        { rotate: 0 },
        { rotate: 360 },
      ]);

      render(
        <MockElement
          animationRef={animationRef}
          initialPos={{ rotate: 150 }}
          id={id}
        />
      );

      return [animationRef, startAnimation];
    }

    test("1", async () => {
      const id = testId++;

      const [animationRef, startAnimation] = setupElement(id);
      const divElement = screen.getByTestId(`animated-div-${id}`);

      expect(divElement.style.transform).toBe("rotate(150deg) translateZ(0)");

      await startAnimation(1, () => {
        expect(divElement.style.transform).toBe("none");
      });
    });

    test("2", async () => {
      const id = testId++;

      const [animationRef, startAnimation] = setupElement(id);
      const divElement = screen.getByTestId(`animated-div-${id}`);

      await startAnimation(2, () => {
        expect(divElement.style.transform).toBe("rotate(360deg) translateZ(0)");
      });

      await startAnimation(0, () => {
        expect(divElement.style.transform).toBe("rotate(150deg) translateZ(0)");
      });
    });
  });
});
