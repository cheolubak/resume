import React from 'react';
import {
  SkillHoriItemStyled,
  SkillHoriListStyled,
  SkillHoriTitleStyled,
} from './SkillHoriListStyled';
import { skills } from '../../../data/skill';
import { css } from '@emotion/css';

function SkillHoriList() {
  return (
    <SkillHoriListStyled
      className={css`
        padding: 0 0 96px;
      `}
    >
      {skills.map((skill) => (
        <SkillHoriItemStyled>
          <SkillHoriTitleStyled>{skill.title}</SkillHoriTitleStyled>
          {/*{skill.list.join(' | ')}*/}
          <SkillHoriListStyled>
            {!!skill.list[0].list
              ? skill.list.map((descSkill) => (
                  <>
                    <SkillHoriItemStyled>{descSkill.title}</SkillHoriItemStyled>
                    {!!descSkill.list && descSkill.list.join(' | ')}
                  </>
                ))
              : skill.list.map((x) => x.title).join(' | ')}
          </SkillHoriListStyled>
        </SkillHoriItemStyled>
      ))}
    </SkillHoriListStyled>
  );
}

export default SkillHoriList;
