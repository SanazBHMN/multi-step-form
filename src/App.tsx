// hooks
import { useMultistepForm } from "./hooks/useMultistepForm";
// components
import { StepsList } from "./components/StepsList";

function App() {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <div>ONE</div>,
      <div>TWO</div>,
      <div>THREE</div>,
      <div>FOUR</div>,
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
