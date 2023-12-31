import { Label } from "@/components/UI/label";

const FormInput = ({
  stateValue,
  setStateValue,
  label,
  inputType,
  type,
  placeholder,
}) => {
  return (
    <div className="mb-4">
      <Label className="text-base font-bold pb-2" htmlFor={inputType}>
        {label}
      </Label>
      <input
        value={stateValue}
        onChange={(value) => setStateValue(value.target.value)}
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
