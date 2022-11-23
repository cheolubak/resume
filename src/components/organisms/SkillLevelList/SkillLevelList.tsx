import React from 'react';
import SkillLevel from '../../molecules/SkillLevel';
import {
  SkillLevelItemStyled,
  SkillLevelListStyled,
} from './SkillLevelListStyled';
import { skillLevels } from '../../../data/skill';

export default function SkillLevelList() {
  return (
    <SkillLevelListStyled>
      {skillLevels.map((x) => (
        <SkillLevelItemStyled key={x.title}>
          <SkillLevel {...x} />
        </SkillLevelItemStyled>
      ))}
    </SkillLevelListStyled>
  );
}
