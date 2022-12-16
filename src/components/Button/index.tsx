import { type } from "@testing-library/user-event/dist/type";
import { HTMLInputTypeAttribute } from "react";
import { StyledButtonGrey, StyledButtonPrimary } from "./style";

interface iButton {
  id?: string;
  text: string;
  type: "button" | "submit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonPrimary = ({ text, type, onClick, id }: iButton) => {
  return (
    <StyledButtonPrimary id={id} onClick={onClick} type={type}>
      {text}
    </StyledButtonPrimary>
  );
};

export const ButtonGrey = ({ text, type, onClick, id }: iButton) => {
  return (
    <StyledButtonGrey id={id} onClick={onClick} type={type}>
      {text}
    </StyledButtonGrey>
  );
};
