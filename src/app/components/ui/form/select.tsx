import React, { SelectHTMLAttributes, forwardRef } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label className="mb-2 text-white text-xl">
          {label}
          {props.required && <span className="text-[#00FCFF] ml-1">*</span>}
        </label>
        <div className="relative bg-transparent p-[1px] rounded-lg focus-within:bg-gradient-to-r from-[#00FCFF] to-[#24689B]">
          <select
            ref={ref}
            {...props}
            className="bg-[#EAEAEA] text-black/50 rounded-lg px-4 py-3 outline-none w-full appearance-none"
            style={{
              backgroundImage: "none",
              transition: "border 0.3s ease",
            }}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black/50">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
