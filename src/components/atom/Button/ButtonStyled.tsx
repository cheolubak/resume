import styled from "@emotion/styled";
import { BUTTON } from "../../subatomic/Typography";

export const ButtonStyled = styled.button`
  ${BUTTON};
  padding: 0 24px;
  border-radius: 8px;
  height: 48px;
  color: var(--COLOR_F);
  background-color: var(--COLOR_ORANGE);
  cursor: pointer;

  &:hover {
    filter: grayscale(0.2);
  }

  &:active {
    filter: grayscale(0.4);
  }

  &:disabled {
    background-color: var(--COLOR_E);
    color: var(--COLOR_6);
    cursor: not-allowed;
  }
`;
