import React, { memo } from "react";
import { WorkCardProps } from "./WorkCardProps";
import {
  WorCardTitleStyled,
  WorkCardDateStyled,
  WorkCardDescriptionStyled,
  WorkCardItemsStyled,
  WorkCardItemStyled,
  WorkCardSkillStyled,
  WorkCardSkillTitleStyled,
  WorkCardStyled,
  WorkCardSubTitleStyled,
} from "./WorkCardStyled";

function WorkCard({
  started,
  ended,
  corpName,
  description,
  skills,
  projects,
  ...props
}: WorkCardProps) {
  return (
    <WorkCardStyled>
      <WorkCardDateStyled>
        {started} ~ {!!ended ? ended : "현재"}
      </WorkCardDateStyled>
      <WorCardTitleStyled>{corpName}</WorCardTitleStyled>
      <WorkCardDescriptionStyled
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <WorkCardSubTitleStyled>기술 스택</WorkCardSubTitleStyled>
      <WorkCardItemsStyled>
        {skills.map((skill) => (
          <WorkCardItemStyled key={skill.title}>
            <WorkCardSkillTitleStyled>{skill.title}</WorkCardSkillTitleStyled>
            {skill.sub.length > 0 && (
              <WorkCardSkillStyled>-</WorkCardSkillStyled>
            )}
            <WorkCardSkillStyled>{skill.sub.join(", ")}</WorkCardSkillStyled>
          </WorkCardItemStyled>
        ))}
      </WorkCardItemsStyled>
      <WorkCardSubTitleStyled>진행한 프로젝트</WorkCardSubTitleStyled>
      <WorkCardItemsStyled>
        {projects.map((project) => (
          <WorkCardItemStyled>{project}</WorkCardItemStyled>
        ))}
      </WorkCardItemsStyled>
    </WorkCardStyled>
  );
}

export default memo(WorkCard);
