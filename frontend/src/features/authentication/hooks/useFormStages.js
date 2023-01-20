import React from "react";

const useFormStages = () => {
  const [cuurentStage, setCurrentStage] = useState(1);

  function nextStage() {
    setCurrentStage(cuurentStage + 1);
  }

  function previousStage() {
    setCurrentStage(cuurentStage - 1);
  }

  return {
    cuurentStage,
    nextStage,
    previousStage,
  };
};

export default useFormStages;
