"use client";

import TextInput from "@/components/text-input";
import {useState} from "react";
import CheckboxInput from "@/components/checkbox-input";
import CheckboxListInput from "@/components/checkbox-list-input";
import PasswordInput from "@/components/password-input";
import {Code} from "@/components/code";

export default function Exo01() {
  const [dynamicTextValue, setDynamicTextValue] = useState("Cette valeur est affichée en temps réel");
  const [dynamicBoolValue, setDynamicBoolValue] = useState(false);

  const checkboxOptions = {
    opt1: 'Option N°1',
    opt2: 'Option N°2',
    opt3: 'Option N°3'
  };

  const [checked, setChecked] = useState<Record<string, boolean>>({
    opt1: true,
    opt2: false,
    opt3: false
  });

  return <div className={"flex flex-col gap-4 p-4"}>
    <h1 className={"uppercase font-bold text-2xl"}>Champ textuel</h1>
    <TextInput label={"Défaut"} />
    <TextInput label={"Requis"} required={true} />
    <TextInput label={"Valeur par défaut"} value={"Ma valeur"} />
    <TextInput label={"Affichange temps réel de la valeur"} value={"Cette valeur est affichée en temps réel"} onChange={setDynamicTextValue} />
    { dynamicTextValue }

    <h1 className={"uppercase font-bold text-2xl"}>Case à cocher</h1>
    <CheckboxInput label={"Option"} />
    <CheckboxInput label={"Option cochée par défaut"} initiallyChecked={true} />
    <CheckboxInput label={"Option en temps réel"} onChange={setDynamicBoolValue} />
    Case cochée: { dynamicBoolValue ? "oui" : "non" }

    <h1 className={"uppercase font-bold text-2xl"}>Case à cocher (choix multiples)</h1>
    <CheckboxListInput options={checkboxOptions} initiallyChecked={checked} onChange={setChecked} />
    <Code label={"checkboxes"}>
      {checked}
    </Code>

    <h1 className={"uppercase font-bold text-2xl"}>Champ mot de passe</h1>
    <PasswordInput label={"Mot de passe"} value={"mon super mot de passe"} />
    <PasswordInput label={"Mot de passe"} value={"mon super mot de passe"} shown={true} />
  </div>
}