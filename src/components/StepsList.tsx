import { ReactElement } from "react";
// components
import { Step } from "./Step";
// images
import mobileBackground from "../assets/images/bg-sidebar-mobile.svg";
import desktopBackground from "../assets/images/bg-sidebar-desktop.svg";

interface StepsListProps {
  steps: ReactElement[];
}

export const StepsList = ({ steps }: StepsListProps) => {
  const stepTitles = ["your info", "select plan", "add-ons", "summary"];

  return (
    <div className="relative">
      <img
        src={mobileBackground}
        className="block h-auto w-full sm:hidden"
        alt=""
      />
      <img src={desktopBackground} className="hidden sm:block" alt="" />
      <ol
        className={`absolute top-[50%] left-[50%] flex -translate-1/2 justify-center gap-4 sm:top-36 sm:left-24 sm:flex-col`}
      >
        {steps.map((_, index) => (
          <Step
            key={index}
            stepNumber={index + 1}
            stepTitle={stepTitles[index]}
          />
        ))}
      </ol>
    </div>
  );
};
