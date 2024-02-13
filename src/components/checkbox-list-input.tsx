import CheckboxInput from "@/components/checkbox-input";
import {useState} from "react";

export type CheckboxListInputOptions<T = Record<string, string>> = {
  options: T;
  initiallyChecked: Record<keyof T, boolean>;
  onChange?: (checked: Record<keyof T, boolean>) => void;
};

export default function CheckboxListInput(options: CheckboxListInputOptions) {
  const [checked, setChecked] = useState<Record<string, boolean>>({...options.initiallyChecked});

  const handleChange = (key: string, value: boolean) => {
    const newChecked = {...checked};
    newChecked[key] = value;

    setChecked(newChecked);
    if (!!options.onChange)
      options.onChange(newChecked);
  }

  return <div className={"flex flex-col gap-2"}>
    { Object.entries(options.options).map(([ key, label ]) =>
        <CheckboxInput key={key}
                       label={label}
                       initiallyChecked={!!options.initiallyChecked && options.initiallyChecked[key]}
                       onChange={value => handleChange(key, value)} />) }
  </div>
}