import styled from "@emotion/styled";

export const ContactFromStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 16px;
  width: 600px;
  margin: 24px 0 0;

  @media screen and (max-width: 600px) {
    width: calc(100vw - 48px);
  }
`;
