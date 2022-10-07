import styled from '@emotion/styled';
import { BODY, CAPTION_B, IMPORT, OVERLINE } from '../../subatomic/Typography';

export const SkillHoriListStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 24px;
`;

export const SkillHoriItemStyled = styled.li`
  ${IMPORT};
  color: var(--COLOR_F);
`;

export const SkillHoriTitleStyled = styled.strong`
  ${OVERLINE};
  color: var(--COLOR_ORANGE);
  display: block;
  margin: 0 0 8px;
`;