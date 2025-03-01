import { ReactNode } from "react";

interface FormWrapperProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const FormWrapper = ({
  title,
  description,
  children,
}: FormWrapperProps) => {
  return (
    <>
      <div className="mb-4">
        <h1 className="text-marine-blue text-2xl mb-2 font-bold">{title}</h1>
        <p className="text-cool-gray">{description}</p>
      </div>
      <div>{children}</div>
    </>
  );
};
