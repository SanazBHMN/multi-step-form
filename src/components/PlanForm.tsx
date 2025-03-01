import { FormWrapper } from "./FormWrapper";

export const PlanForm = () => {
  let { title, description } = {
    title: "Select your plan",
    description: "You have the option of monthly or yearly billing.",
  };

  return (
    <FormWrapper title={title} description={description}>
      <label htmlFor="">arcade</label>
      <input type="checkbox" />

      <label htmlFor="">advanced</label>
      <input type="checkbox" />

      <label htmlFor="">pro</label>
      <input type="checkbox" />
    </FormWrapper>
  );
};
