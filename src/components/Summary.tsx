import { FormWrapper } from "./FormWrapper";

export const Summary = () => {
  let { title, description } = {
    title: "Finishing up",
    description: "Double-check everything looks OK before confirming.",
  };

  return (
    <FormWrapper title={title} description={description}>
      REVIEW YOUR SELECTIONS
    </FormWrapper>
  );
};
