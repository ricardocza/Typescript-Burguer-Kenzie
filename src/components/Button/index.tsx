import { type } from "@testing-library/user-event/dist/type";
import { HTMLInputTypeAttribute } from "react";
import { StyledButtonGrey, StyledButtonPrimary } from "./style";

interface iButton {
  text: string;
  type: "button" | "submit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonPrimary = ({ text, type, onClick }: iButton) => {
  return (
    <StyledButtonPrimary onClick={onClick} type={type}>
      {text}
    </StyledButtonPrimary>
  );
};

export const ButtonGrey = ({ text, type, onClick }: iButton) => {
  return (
    <StyledButtonGrey onClick={onClick} type={type}>
      {text}
    </StyledButtonGrey>
  );
};
