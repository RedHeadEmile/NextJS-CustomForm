"use client";

import {FormEvent, useState} from "react";
import TextInput from "@/components/text-input";
import PasswordInput from "@/components/password-input";
import {Code} from "@/components/code";

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function Exo02() {
  const [formDataBis, setFormDataBis] = useState<Record<string, string>>({
    firstName: 'Lin',
    lastName: 'Guini',
    email: 'lin.guini@barilla.it',
    password: '1234567'
  });

  const onChange = (key: string, value: string) => {
    const newFormDataBis = {...formDataBis};
    newFormDataBis[key] = value;
    setFormDataBis(newFormDataBis);
  };

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    const elements = (event.target as HTMLFormElement).elements;
    setFormData({
      firstName: (elements.namedItem('firstName') as any)?.value ?? '',
      lastName: (elements.namedItem('lastName') as any)?.value ?? '',
      email: (elements.namedItem('email') as any)?.value ?? '',
      password: (elements.namedItem('password') as any)?.value ?? '',
    });
  };

  return <div className={"flex flex-col gap-4 p-4"}>
    <form onSubmit={onFormSubmit} className={"flex flex-col gap-4"}>
      <div className={"flex gap-4"}>
        <TextInput className={"flex-grow"} label={"Prénom"} value={"Lin"} name={"firstName"} onChange={value => onChange('firstName', value)} />
        <TextInput className={"flex-grow"} label={"Nom"} value={"Guini"} name={"lastName"} onChange={value => onChange('lastName', value)} />
      </div>
      <TextInput label={"Addresse e-mail"} value={"lin.guini@barilla.it"} name={"email"} onChange={value => onChange('email', value)} />
      <PasswordInput label={"Mot de passe"} value={"1234567"} name={"password"} onChange={value => onChange('password', value)} />
      <button type="submit" className={"uppercase rounded bg-primary text-white p-2 self-end px-4"}>M&apos;inscire</button>
    </form>
    <div className={"flex justify-between"}>
      <Code label={"formValues"}>
        {formData}
      </Code>
      <Code label={"inputValues"}>
        {formDataBis}
      </Code>
    </div>
  </div>
}