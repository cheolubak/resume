import React from "react";
import SkillLevel from "../../molecules/SkillLevel";
import {
  SkillLevelItemStyled,
  SkillLevelListStyled,
} from "./SkillLevelListStyled";

export default function SkillLevelList() {
  const skills = [
    { title: "FRONTEND", point: 90 },
    { title: "BACKEND", point: 75 },
  ];
  return (
    <SkillLevelListStyled>
      {skills.map((x) => (
        <SkillLevelItemStyled key={x.title}>
          <SkillLevel {...x} />
        </SkillLevelItemStyled>
      ))}
    </SkillLevelListStyled>
  );
}
