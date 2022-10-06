import React from "react";
import { InputProps } from "./InputProps";
import { InputStyled } from "./InputStyled";

export default function Input({ ...props }: InputProps) {
  return <InputStyled {...props} />;
}
