import React, { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label className="mb-2 text-white text-xl">
          {label}
          {props.required && <span className="text-[#00FCFF] ml-1">*</span>}
        </label>
        <div className="relative bg-transparent p-[1px] rounded-lg focus-within:bg-gradient-to-r from-[#00FCFF] to-[#24689B]">
          <input
            ref={ref}
            {...props}
            className="bg-[#EAEAEA] text-black/50 rounded-lg px-4 py-3 outline-none"
            style={{
              backgroundImage: "none",
              transition: "border 0.3s ease",
            }}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
