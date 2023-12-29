import React from "react";
import { Label } from "@/components/UI/label";

const FormInput = ({ label, inputType, type, placeholder }) => {
  return (
    <div className="mb-4">
      <Label className="text-base font-medium pb-2" htmlFor={inputType}>
        {label}
      </Label>
      <input
        className="shadow appearance-none border bg-neutral-50 border-slate-200 rounded-lg w-full py-2.5 px-3.5  focus:outline-none focus:shadow-outline"
        id={type}
        required
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
