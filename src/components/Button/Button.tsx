import React from "react";

export type ButtonProps = {
  text: string;
  children: number;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <>
      <button className="btn">{children}</button>
    </>
  );
};

export default Button;
