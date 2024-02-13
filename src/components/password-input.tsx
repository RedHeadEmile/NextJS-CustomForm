"use client";

import TextInput, {TextInputOptions} from "@/components/text-input";
import {useState} from "react";
import {Eye, EyeClosed} from "@phosphor-icons/react";

export type PasswordInputOptions = {
  shown?: boolean;
} & Omit<TextInputOptions, 'suffixIcon' | 'onSuffixIconClicked' | 'passwordInput'>;

export default function PasswordInput(options: PasswordInputOptions) {
  const [shown, setShown] = useState(!!options.shown);

  return <TextInput {...options} passwordInput={!shown} onSuffixIconClicked={() => setShown(!shown)} suffixIcon={shown ? <EyeClosed /> : <Eye />} />
}