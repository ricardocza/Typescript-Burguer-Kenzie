import { HTMLInputTypeAttribute, useState } from "react";
import { StyledInput } from "./style";

interface iInput {
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  showButton: boolean;
}

export const Input = ({ label, type, placeholder, showButton }: iInput) => {
  return (
    <StyledInput>
      <label htmlFor={label}>{label}</label>
      <input name={label} type={type} placeholder={placeholder} />
      {showButton && <button>BOTÃO</button>}
    </StyledInput>
  );
};
