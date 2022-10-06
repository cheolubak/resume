import styled from "@emotion/styled";

export const BackgroundStyled = styled.picture`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  object-fit: cover;
  z-index: -1;
  opacity: 0.3;

  & source,
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
