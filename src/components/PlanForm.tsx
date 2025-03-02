// components
import { FormWrapper } from "./FormWrapper";
import { Toggle } from "./Toggle";
// statics
import arcade from "../assets/icons/icon-arcade.svg";
import advanced from "../assets/icons/icon-advanced.svg";
import pro from "../assets/icons/icon-pro.svg";
import { useState } from "react";

export const PlanForm = () => {
  const [isMonthlySelected, setIsMonthlySelected] = useState(false);

  let { title, description } = {
    title: "Select your plan",
    description: "You have the option of monthly or yearly billing.",
  };

  return (
    <FormWrapper title={title} description={description}>
      <ul className="flex flex-col justify-center gap-5">
        <li>
          <input
            type="radio"
            id="arcade"
            name="hosting"
            value="hosting-small"
            className="peer hidden"
            required
          />
          <label
            htmlFor="arcade"
            className="text-marine-blue peer-checked:border-purplish-blue inline-flex w-full cursor-pointer items-center justify-start gap-3 rounded-lg border border-gray-200 bg-white p-5 peer-checked:text-blue-600 hover:bg-gray-100 hover:text-gray-600"
          >
            <img src={arcade} alt="" />
            <div className="block">
              <div className="w-full text-lg font-semibold">Arcade</div>
              <div className="w-full text-sm">
                {isMonthlySelected ? "$9/mo" : "$90/yr"}
              </div>
              {!isMonthlySelected && (
                <div className="w-full text-sm">2 months free</div>
              )}
            </div>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="advanced"
            name="hosting"
            value="hosting-small"
            className="peer hidden"
            required
          />
          <label
            htmlFor="advanced"
            className="text-marine-blue peer-checked:border-purplish-blue inline-flex w-full cursor-pointer items-center justify-start gap-3 rounded-lg border border-gray-200 bg-white p-5 peer-checked:text-blue-600 hover:bg-gray-100 hover:text-gray-600"
          >
            <img src={advanced} alt="" />
            <div className="block">
              <div className="w-full text-lg font-semibold">Advanced</div>
              <div className="w-full text-sm">
                {isMonthlySelected ? "$12/mo" : "$120/yr"}
              </div>
              {!isMonthlySelected && (
                <div className="w-full text-sm">2 months free</div>
              )}
            </div>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="pro"
            name="hosting"
            value="hosting-small"
            className="peer hidden"
            required
          />
          <label
            htmlFor="pro"
            className="text-marine-blue peer-checked:border-purplish-blue flex w-full cursor-pointer items-center justify-start gap-3 rounded-lg border border-gray-200 bg-white p-5 peer-checked:text-blue-600 hover:bg-gray-100 hover:text-gray-600"
          >
            <img src={pro} alt="" />
            <div className="block">
              <div className="w-full text-lg font-semibold">Pro</div>
              <div className="w-full text-sm">
                {isMonthlySelected ? "$15/mo" : "$150/yr"}
              </div>
              {!isMonthlySelected && (
                <div className="w-full text-sm">2 months free</div>
              )}
            </div>
          </label>
        </li>
      </ul>
      <Toggle
        value={isMonthlySelected}
        onChange={() => setIsMonthlySelected(!isMonthlySelected)}
      />
    </FormWrapper>
  );
};
