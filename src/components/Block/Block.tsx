import { ReactNode } from "react";

import "./Block.scss";

type Props = {
  children: ReactNode;
  title: string;
};

export default function Block({ children, title }: Props) {
  return (
    <div className="block">
      <h2>{title}</h2>
      <section className="blockContent">{children}</section>
    </div>
  );
}
