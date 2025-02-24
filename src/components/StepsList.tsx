import { ReactElement } from "react";
// components
import { Step } from "./Step";

interface StepsListProps {
  steps: ReactElement[];
}

export const StepsList = ({ steps }: StepsListProps) => {
  const stepTitles = ["your info", "select plan", "add-ons", "summary"];
  //   console.log(steps);
  return (
    <ol className="flex flex-col justify-start gap-6">
      {steps.map((_, index) => (
        <Step
          key={index}
          stepNumber={index + 1}
          stepTitle={stepTitles[index]}
        />
      ))}
    </ol>
  );
};
