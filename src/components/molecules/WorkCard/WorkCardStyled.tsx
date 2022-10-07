import styled from '@emotion/styled';
import {
  BODY,
  CAPTION_B,
  OVERLINE,
  SUB_TITLE,
} from '../../subatomic/Typography';

export const WorkCardStyled = styled.article`
  padding: 24px;
  background-color: rgba(51, 51, 51, 0.8);
  border-radius: 24px;
  width: 300px;
  box-shadow: 0px 12px 40px rgba(240, 150, 92, 0.20);
`;

export const WorkCardDateStyled = styled.div`
  ${OVERLINE};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  color: var(--COLOR_F);
  margin: 0 0 10px;
`;

export const WorCardTitleStyled = styled.h3`
  ${SUB_TITLE};
  color: var(--COLOR_ORANGE);
  white-space: nowrap;
  margin: 0 0 10px;
`;

export const WorkCardDescriptionStyled = styled.p`
  ${BODY};
  color: var(--COLOR_F);
  margin: 0 0 36px;
`;

export const WorkCardSubTitleStyled = styled.strong`
  ${CAPTION_B}
  display: block;
  margin: 0 0 8px;
  color: var(--COLOR_F);
`;

export const WorkCardItemsStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  gap: 8px;

  &:not(:last-of-type) {
    margin: 0 0 36px;
  }
`;

export const WorkCardItemStyled = styled.li`
  ${BODY};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  color: var(--COLOR_F);

  &:bofore {
    font: inherit;
    color: inherit;
    content: '•';
  }
`;

export const WorkCardSkillTitleStyled = styled.strong`
  font: inherit;
  color: var(--COLOR_ORANGE);
`;

export const WorkCardSkillStyled = styled.span`
  ${BODY};
  color: inherit;
`;
