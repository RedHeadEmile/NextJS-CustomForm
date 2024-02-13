export type LabelOptions = {
  label: string;
  required?: boolean;
  inputId: string;
};

export default function Label(options: LabelOptions) {
  return <label htmlFor={options.inputId} className={"flex gap-1 text-sm font-bold uppercase"}>
    { options.label }
    { !!options.required && <span className={"text-red-600"}>*</span> }
  </label>
}