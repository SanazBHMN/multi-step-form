import { Step } from "./components/Step";
import { useMultistepForm } from "./hooks/useMultistepForm";

function App() {
  const { steps, currentStepIndex } = useMultistepForm([]);

  return (
    <div>
      <Step stepNumber={currentStepIndex + 1} stepTitle="your info" />
    </div>
  );
}

export default App;
