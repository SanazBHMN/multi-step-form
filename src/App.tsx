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

  return (
    <div>
      <StepsList steps={steps} />
      <form>
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
