interface StepProps {
  stepNumber: number;
  stepTitle?: string;
  isStepActive: boolean;
}

export const Step = ({ stepNumber, stepTitle, isStepActive }: StepProps) => {
  return (
    <li className={`flex items-start justify-start gap-3 text-sm font-bold`}>
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full border ${isStepActive ? "bg-light-blue border-none text-black" : "text-white"}`}
      >
        {stepNumber}
      </div>
      {stepTitle && (
        <div className="hidden flex-col sm:flex">
          <p className="text-light-gray font-light">STEP {stepNumber}</p>
          <p className="uppercase text-white">{stepTitle}</p>
        </div>
      )}
    </li>
  );
};
