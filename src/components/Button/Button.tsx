import { ReactNode } from "react";

import "./Button.scss";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  off?: boolean;
  fullSize?: boolean;
};

export default function Button({
  onClick,
  children,
  disabled = false,
  off = false,
  fullSize = false,
}: Props) {
  let classes = "button";
  if (fullSize) classes += " fullSize";
  if (off) classes += " off";

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
