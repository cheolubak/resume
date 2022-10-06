import styled from "@emotion/styled";

export const IconImageStyled = styled.picture`
  width: 24px;
  height: 24px;
  object-fit: cover;

  & source,
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
