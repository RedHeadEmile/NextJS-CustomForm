"use client";

import Label, {LabelOptions} from "@/components/label";
import {ChangeEvent, ReactElement, useId} from "react";

export type TextInputOptions = {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  name?: string;
  error?: string;

  passwordInput?: boolean;
  suffixIcon?: ReactElement;
  onSuffixIconClicked?: () => void;

  className?: string;
} & Omit<LabelOptions, 'inputId'>;

export default function TextInput(options: TextInputOptions) {
  const inputId = useId();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (options.onChange !== undefined)
      options.onChange(event.target.value);
  };

  const onSuffixIconClick = () => {
    if (options.onSuffixIconClicked !== undefined)
      options.onSuffixIconClicked();
  };

  return <div className={"flex flex-col gap-1 " + (!!options.error ? "text-red-600 " : "") + options.className}>
    <Label label={options.label} required={options.required} inputId={inputId} />
    <div className={"w-full flex border rounded " + (!!options.error ? 'border-red-600' : 'border-primary')}>
      <input className={"bg-transparent flex-grow p-2 rounded focus:outline outline-2 " + (!!options.error ? 'outline-red-600' : 'outline-primary')}
             type={options.passwordInput ? 'password' : 'text'}
             id={inputId}
             name={options.name}
             placeholder={options.placeholder ?? 'Défaut...'}
             defaultValue={options.value}
             onChange={onChange} />
      { !!options.suffixIcon && <div className={"flex items-center justify-center aspect-square border-l cursor-pointer " + (!!options.error ? 'border-red-600' : 'border-primary')} onClick={onSuffixIconClick}>
        { options.suffixIcon }
      </div> }
    </div>
    { !!options.error && <span className={"font-bold"}>Erreur: {options.error}</span>}
  </div>
}