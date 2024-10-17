import React, { TextareaHTMLAttributes, forwardRef } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label className="mb-2 text-white text-xl">
          {label}
          {props.required && <span className="text-[#00FCFF] ml-1">*</span>}
        </label>
        <div className="relative bg-transparent p-[1px] rounded-lg focus-within:bg-gradient-to-r from-[#00FCFF] to-[#24689B]">
          <textarea
            ref={ref}
            {...props}
            className="bg-[#EAEAEA] text-black/50 rounded-lg px-4 py-3 outline-none w-full resize-none"
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

TextArea.displayName = "TextArea";

export default TextArea;
