import styled from "@emotion/styled";
import { BODY } from "../../subatomic/Typography";

export const SkillLevelStyled = styled.article``;

export const SkillLevelTitleStyled = styled.strong`
  ${BODY};
  display: block;
  color: var(--COLOR_F);
  margin: 0 0 8px;
`;

export const SkillLevelBackdropStyled = styled.div`
  width: 350px;
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
  background-color: var(--COLOR_F);
  position: relative;

  @media screen and (max-width: 600px) {
    width: calc(100vw - 48px);
  }
`;
