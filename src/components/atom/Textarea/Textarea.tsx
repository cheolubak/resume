import React from "react";
import { TextareaProps } from "./TextareaProps";
import { TextareaStyled } from "./TextareaStyled";

export default function Textarea({ ...props }: TextareaProps) {
  return <TextareaStyled {...props} />;
}
