import styled from "@emotion/styled";
import { BODY } from "../../subatomic/Typography";

export const InputStyled = styled.input`
  all: unset;
  ${BODY};
  width: 100%;
  height: 48px;
  border-radius: 8px;
  background-color: var(--COLOR_3_A80);
  color: var(--COLOR_F);
  padding: 0 16px;
  box-sizing: border-box;

  &::placeholder {
    color: var(--COLOR_A);
  }
`;
