import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  props: Object;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
}
