interface StepProps {
  stepNumber: number;
  stepTitle?: string;
}

export const Step = ({ stepNumber, stepTitle }: StepProps) => {
  return (
    <li className="flex items-start justify-start gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-full border">
        {stepNumber}
      </div>
      {stepTitle && (
        <div className="flex flex-col">
          <p>STEP {stepNumber}</p>
          <p className="uppercase">{stepTitle}</p>
        </div>
      )}
    </li>
  );
};
