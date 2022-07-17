import React, { ReactNode, memo } from "react";

interface ButtonProps {
  children: ReactNode;
  handleClick: () => void;
}

function Button({ children, handleClick }: ButtonProps) {
  return (
    <button className="button" data-testid="button" onClick={handleClick}>
      {children}
    </button>
  );
}
export default memo(Button);
