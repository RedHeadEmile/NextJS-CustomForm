import { type FC } from "react";

type Props = {
  children: unknown,
  label: string
}

export const Code: FC<Props> = function({children, label}) {
  return <div className="overflow-x-scroll">
    <code>{label} :</code>
    <pre>{JSON.stringify(children, null, 2)}</pre>
  </div>
};