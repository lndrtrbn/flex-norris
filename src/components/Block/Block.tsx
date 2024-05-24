import { ReactNode } from "react";

import "./Block.scss";

type Props = {
  children: ReactNode;
  title: string;
  contextual?: ReactNode;
};

export default function Block({ children, title, contextual }: Props) {
  return (
    <div className="block">
      <div className="blockHeader">
        <h2>{title}</h2>
        {contextual}
      </div>
      <section className="blockContent">{children}</section>
    </div>
  );
}
