// hooks
import { useMultistepForm } from "./hooks/useMultistepForm";
// components
import { StepsList } from "./components/StepsList";

function App() {
  const { steps, currentStepIndex } = useMultistepForm([
    <div></div>,
    <div></div>,
    <div></div>,
    <div></div>,
  ]);

  return (
    <div>
      <StepsList steps={steps} />
    </div>
  );
}

export default App;
