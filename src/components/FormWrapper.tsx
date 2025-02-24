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
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>{children}</div>
    </>
  );
};
