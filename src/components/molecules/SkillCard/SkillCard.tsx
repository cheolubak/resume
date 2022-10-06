import React, { memo } from "react";
import { SkillCardProps } from "./SkillCardProps";
import { SkillCardStyled } from "./SkillCardStyled";

function SkillCard({ ...props }: SkillCardProps) {
  return <SkillCardStyled>{props.children}</SkillCardStyled>;
}

export default memo(SkillCard);
