import { FormWrapper } from "./FormWrapper";

export const AddOnsForm = () => {
  let { title, description } = {
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
  };

  return (
    <FormWrapper title={title} description={description}>
      <label htmlFor="">online services</label>
      <input type="checkbox" />

      <label htmlFor="">larger storage</label>
      <input type="checkbox" />

      <label htmlFor="">customizable storage</label>
      <input type="checkbox" />
    </FormWrapper>
  );
};
