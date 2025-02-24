import { FormWrapper } from "./FormWrapper";

export const Summary = () => {
  let { title, description } = {
    title: "finishing up",
    description: "double-check everything looks OK before confirming.",
  };

  return (
    <FormWrapper title={title} description={description}>
      REVIEW YOUR SELECTIONS
    </FormWrapper>
  );
};
