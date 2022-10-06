import styled from "@emotion/styled";
import { TITLE } from "../../subatomic/Typography";

export const TitleStyled = styled.h1`
  ${TITLE};
  color: var(--COLOR_ORANGE);
  margin: 0 0 24px;

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`;
