import { FormWrapper } from "./FormWrapper";

export const PersonalInfoForm = () => {
  let { title, description } = {
    title: "Personal info",
    description: "Please provide your name, email address, and phone number.",
  };

  return (
    <FormWrapper title={title} description={description}>
      <label htmlFor="">Name</label>
      <input type="text" placeholder="e.g. Stephan King" autoFocus required />

      <label htmlFor="">Email Address</label>
      <input type="text" placeholder="e.g. stephanking@lorem.com" required />

      <label htmlFor="">Phone Number</label>
      <input type="tel" placeholder="e.g. +1 234 567 890" />
    </FormWrapper>
  );
};
