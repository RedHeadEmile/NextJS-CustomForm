import {ChangeEvent, useId} from "react";

export type CheckboxInputOptions = {
  label: string;
  initiallyChecked?: boolean;
  onChange?: (value: boolean) => void;
};

export default function CheckboxInput(options: CheckboxInputOptions) {
  const inputId = useId();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (options.onChange !== undefined)
      options.onChange(event.target.checked);
  };

  return <div className={"flex gap-2"}>
    <input type="checkbox" id={inputId} onChange={onChange} defaultChecked={options.initiallyChecked} />
    <label htmlFor={inputId} className={"text-sm font-bold"}>{options.label}</label>
  </div>
}