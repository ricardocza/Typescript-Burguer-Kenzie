import { FormEventHandler } from "react";
import { StyledForm } from "./style";

interface iForm {
  children: React.ReactNode;
  onSubmit: FormEventHandler;
}

export interface iSubmitHandler {
  onSubmit: FormEventHandler;
}

export const Form = ({ children, onSubmit }: iForm) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};
