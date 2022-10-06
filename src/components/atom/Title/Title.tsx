import React from "react";
import { TitleStyled } from "./TitleStyled";

export default function Title({ ...props }) {
  return <TitleStyled>{props.children}</TitleStyled>;
}
