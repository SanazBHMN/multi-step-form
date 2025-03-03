// hooks
import { useMultistepForm } from "./hooks/useMultistepForm";
// components
import { StepsList } from "./components/StepsList";
import { PersonalInfoForm } from "./components/PersonalInfoForm";
import { AddOnsForm } from "./components/AddOnsForm";
import { PlanForm } from "./components/PlanForm";
import { Summary } from "./components/Summary";

function App() {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <PersonalInfoForm />,
      <PlanForm />,
      <AddOnsForm />,
      <Summary />,
    ]);

  // console.log(currentStepIndex);
  // console.log(steps);

  return (
    <div className="items-center justify-center md:flex">
      <StepsList steps={steps} currentStepIndex={currentStepIndex} />
      <form className="absolute top-25 right-0 left-0 mx-auto w-11/12 rounded-lg bg-white px-5 py-8 shadow-2xs sm:relative">
        {step}
        {!isFirstStep && (
          <button type="button" onClick={back}>
            Go Back
          </button>
        )}
        <button type="button" onClick={next}>
          {isLastStep ? "Confirm" : "Next Step"}
        </button>
      </form>
    </div>
  );
}

export default App;
