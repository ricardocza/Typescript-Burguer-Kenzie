import { HTMLInputTypeAttribute } from "react";
import { StyledInput } from "./style";
import { UseFormRegister } from "react-hook-form";

interface iInput {
  name: string;
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  showButton: boolean;
  register: UseFormRegister<any>;
}

export const Input = ({
  name,
  label,
  type,
  placeholder,
  showButton,
  register,
}: iInput) => {
  return (
    <StyledInput>
      <label htmlFor={label}>{label}</label>
      <input type={type} placeholder={placeholder} {...register(name)} />
      {showButton && <button>BOTÃO</button>}
    </StyledInput>
  );
};
