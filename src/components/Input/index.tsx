import { forwardRef, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { StyledInput } from "./style";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

interface iInput {
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  showButton: boolean;
  register: UseFormRegisterReturn;
}

export const Input = ({
  label,
  type,
  placeholder,
  showButton,
  register,
}: iInput) => {
  return (
    <StyledInput>
      <label htmlFor={label}>{label}</label>
      <input type={type} placeholder={placeholder} {...register} />
      {showButton && <button>BOTÃO</button>}
    </StyledInput>
  );
};
