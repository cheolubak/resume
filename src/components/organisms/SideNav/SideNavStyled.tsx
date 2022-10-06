import styled from "@emotion/styled";
import { BODY, CAPTION_B, OVERLINE } from "../../subatomic/Typography";

export const SideNavStyled = styled.nav<{ isOpen: boolean }>`
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--COLOR_0);
  color: var(--COLOR_F);
  padding: 16px;
  z-index: 1000;

  @media screen and (max-width: 1024px) {
    transition: height 0.1s, background-color 0.1s;
    height: ${({ isOpen }) => (isOpen ? `100vh` : `80px`)};
    width: ${({ isOpen }) => (isOpen ? `250px` : `100vw`)};
  }

  @media screen and (max-width: 600px) {
    width: ${({ isOpen }) => (isOpen ? `80vw` : `100vw`)};
  }
`;

export const OverlayStyled = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

export const SideNavHeaderStyled = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const SideNavHaderDetailStyled = styled.section``;

export const SideNavNameStyled = styled.strong`
  ${CAPTION_B};
  color: inherit;
  margin: 0 0 4px;
`;

export const SideNavEmailStyled = styled.address`
  ${OVERLINE};
  color: inherit;
`;

export const SideNavItemsStyled = styled.ul<{ isOpen: boolean }>`
  margin: 225px -16px 0;
  padding: 0;
  list-style: none;

  & a {
    text-decoration: none;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 100px;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  }
`;

export const SideNavItemStyled = styled.li`
  ${BODY};
  color: inherit;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 68px;
  border-top: 1px solid var(--COLOR_6);
  border-bottom: 1px solid var(--COLOR_6);
  margin: -1px 0 0;
  font: inherit;

  &:hover {
    color: var(--COLOR_ORANGE);
    font-weight: 700;
    text-shadow: 0 1px 4px var(--COLOR_ORANGE);
  }
`;

export const SideNavFooterStyled = styled.footer<{ isOpen: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 24px 0;

  @media screen and (max-width: 1024px) {
    transition: opacity 0.1s, display 0.1s;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

export const SideNavFooterLinkStyled = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  width: 36px;
  height: 36px;
  background-color: var(--COLOR_F);
`;
