import { type } from "@testing-library/user-event/dist/type";
import { HTMLInputTypeAttribute } from "react";
import { StyledButtonGrey, StyledButtonPrimary } from "./style";

interface iButton {
  text: string;
  type: "button" | "submit";
}

export const ButtonPrimary = ({ text, type }: iButton) => {
  return <StyledButtonPrimary type={type}>{text}</StyledButtonPrimary>;
};

export const ButtonGrey = ({ text, type }: iButton) => {
  return <StyledButtonGrey type={type}>{text}</StyledButtonGrey>;
};
