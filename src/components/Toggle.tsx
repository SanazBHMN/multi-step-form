interface ToggleProps {
  value: boolean;
  onChange: () => void;
}

export const Toggle = ({ value, onChange }: ToggleProps) => {
  //   console.log(value);
  return (
    <div className="mt-5 flex items-center justify-center gap-5 p-4">
      <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
        Monthly
      </span>
      <label className="inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          checked={value}
          onChange={onChange}
          className="peer sr-only"
        />
        <div className="peer relative h-5 w-9 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full dark:bg-gray-700 dark:peer-checked:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
      </label>
      <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
        Yearly
      </span>
    </div>
  );
};
