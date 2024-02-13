"use client";

import {useState} from "react";
import TextInput from "@/components/text-input";
import PasswordInput from "@/components/password-input";
import {Code} from "@/components/code";
import {FormData} from "@/app/exo-02/page";
import {useForm, zodResolver} from "@mantine/form";
import {z} from "zod";

export default function Exo03() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const form = useForm<FormData>({
    initialValues: {
      firstName: 'Lin',
      lastName: 'Guini',
      email: 'lin.guini@barilla.it',
      password: '1234567'
    },

    validate: zodResolver(z.object({
      firstName: z.string().min(1, 'Veuillez remplir le champ'),
      lastName: z.string().min(1, 'Veuillez remplir le champ'),
      email: z.string().email('Adresse email invalide'),
      password: z.string().min(7, 'Mot de passe trop court')
    }))
  });

  return <div className={"flex flex-col gap-4 p-4"}>
    <form onSubmit={form.onSubmit((values) => setFormData(values))} className={"flex flex-col gap-4"}>
      <div className={"flex gap-4"}>
        <TextInput className={"flex-grow"} label={"Prénom"} {...form.getInputProps('firstName')} />
        <TextInput className={"flex-grow"} label={"Nom"} {...form.getInputProps('lastName')} />
      </div>
      <TextInput label={"Addresse e-mail"} {...form.getInputProps('email')} />
      <PasswordInput label={"Mot de passe"} {...form.getInputProps('password')} />
      <button type="submit" className={"uppercase rounded bg-primary text-white p-2 self-end px-4"}>M&apos;inscire</button>
    </form>
    <div className={"flex justify-between"}>
      <Code label={"formValues"}>
        {formData}
      </Code>
    </div>
  </div>
}