import React from "react";
import { DescriptionProps } from "./DescriptionProps";
import { DescriptionStyled } from "./DescriptionStyled";

function Description({ ...props }: DescriptionProps) {
  return <DescriptionStyled>{props.children}</DescriptionStyled>;
}

export default Description;
