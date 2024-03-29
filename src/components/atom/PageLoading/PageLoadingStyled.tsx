import styled from '@emotion/styled';

export const PageLoadingStyled = styled.div`
  width: 200px;
  height: 200px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1002;
`;

export const PageLoadingOverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 1);
  z-index: 1001;
`;
