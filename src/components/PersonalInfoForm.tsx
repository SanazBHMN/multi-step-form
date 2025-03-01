import { FormWrapper } from "./FormWrapper";

export const PersonalInfoForm = () => {
  let { title, description } = {
    title: "Personal info",
    description: "Please provide your name, email address, and phone number.",
  };

  return (
    <FormWrapper title={title} description={description}>
      <div className="flex flex-col justify-center gap-5">
        <div className="flex flex-col justify-center">
          <label htmlFor="name" className="text-marine-blue">
            Name
          </label>
          {/* TODO: active state styles must be added */}
          <input
            type="text"
            placeholder="e.g. Stephan King"
            name="name"
            autoFocus
            required
            className="border-light-gray rounded-sm border px-3 py-2"
          />
        </div>

        <div className="flex flex-col justify-center">
          <label htmlFor="email" className="text-marine-blue">
            Email Address
          </label>
          <input
            type="text"
            placeholder="e.g. stephanking@lorem.com"
            name="email"
            required
            className="border-light-gray rounded-sm border px-3 py-2"
          />
        </div>

        <div className="flex flex-col justify-center">
          <label htmlFor="phone" className="text-marine-blue">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="e.g. +1 234 567 890"
            name="phone"
            className="border-light-gray rounded-sm border px-3 py-2"
          />
        </div>
      </div>
    </FormWrapper>
  );
};
