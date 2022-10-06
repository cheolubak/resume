import React, { useEffect, useReducer } from "react";
import {
  OverlayStyled,
  SideNavEmailStyled,
  SideNavFooterLinkStyled,
  SideNavFooterStyled,
  SideNavHaderDetailStyled,
  SideNavHeaderStyled,
  SideNavItemsStyled,
  SideNavItemStyled,
  SideNavNameStyled,
  SideNavStyled,
} from "./SideNavStyled";
import { NavLink } from "react-router-dom";
import { css } from "@emotion/css";

import Logo from "../../../assets/images/logo.svg";
import Github from "../../../assets/images/github.svg";
import Tistory from "../../../assets/images/tistory.svg";
import { useAnalytics } from "../../../hooks/Analytics";

function SideNav() {
  const [isOpen, toggle] = useReducer(toggleSideNav, false);
  const navItems = [
    { path: "/", title: "Abount" },
    { path: "/skills", title: "Skills" },
    { path: "/works", title: "Works" },
    { path: "/contact", title: "Contact" },
  ];

  const { selectContent } = useAnalytics();

  function toggleSideNav(state: boolean) {
    return !state;
  }

  function clickNav(title: string) {
    selectContent({ contentId: title, contentType: "button" });
  }

  return (
    <>
      {isOpen && <OverlayStyled />}
      <SideNavStyled isOpen={isOpen}>
        <SideNavHeaderStyled>
          <img src={Logo} alt="Cheolu.B" onClick={toggle} />
          <SideNavHaderDetailStyled>
            <SideNavNameStyled>Cheolu.B</SideNavNameStyled>
            <SideNavEmailStyled>dev.cheolubak@gmail.com</SideNavEmailStyled>
          </SideNavHaderDetailStyled>
        </SideNavHeaderStyled>
        <SideNavItemsStyled isOpen={isOpen}>
          {navItems.map((x) => (
            <NavLink
              end
              to={x.path}
              key={x.title}
              onClick={clickNav.bind({}, x.title)}
              className={({ isActive }) =>
                isActive
                  ? css`
                      color: var(--COLOR_ORANGE);
                      font-weight: 700;
                      text-shadow: 0 1px 4px var(--COLOR_ORANGE);
                    `
                  : css`
                      color: #fff;
                      font-weight: 400;
                    `
              }
            >
              <SideNavItemStyled>{x.title}</SideNavItemStyled>
            </NavLink>
          ))}
        </SideNavItemsStyled>
        <SideNavFooterStyled isOpen={isOpen}>
          <SideNavFooterLinkStyled
            href="https://github.com/cheolubak"
            target="_blank"
          >
            <img
              src={Github}
              className={css`
                width: 24px;
                height: 24px;
              `}
            />
          </SideNavFooterLinkStyled>
          <SideNavFooterLinkStyled
            href="https://dev-bak.tistory.com/"
            target="_blank"
          >
            <img
              src={Tistory}
              className={css`
                width: 16px;
                height: 16px;
              `}
            />
          </SideNavFooterLinkStyled>
        </SideNavFooterStyled>
      </SideNavStyled>
    </>
  );
}

export default SideNav;
