import React from "react";
import { css } from "@emotion/css";
import {
  SkillLevelBackdropStyled,
  SkillLevelStyled,
  SkillLevelTitleStyled,
} from "./SkillLevelStyled";
import { SkillLevelProps } from "./SkillLevelProps";

function SkillLevel({ title, point, ...props }: SkillLevelProps) {
  return (
    <SkillLevelStyled>
      <SkillLevelTitleStyled>{title}</SkillLevelTitleStyled>
      <SkillLevelBackdropStyled>
        <div
          className={css`
            position: absolute;
            top: 0;
            left: 0;
            width: ${point}%;
            height: 6px;
            background-color: var(--COLOR_GREEN);
            border-radius: 3px;
          `}
        ></div>
      </SkillLevelBackdropStyled>
    </SkillLevelStyled>
  );
}

export default SkillLevel;
