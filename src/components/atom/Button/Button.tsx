import React from "react";
import { ButtonProps } from "./ButtonProps";
import { ButtonStyled } from "./ButtonStyled";

export default function Button({ ...props }: ButtonProps) {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>;
}
