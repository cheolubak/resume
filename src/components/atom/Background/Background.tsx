import React, { memo } from "react";
import { BackgroundStyled } from "./BackgroundStyled";

import BackgroundPNG from "../../../assets/images/bg.png";
import BackgroundWebp from "../../../assets/images/bg.webp";
import BackgroundSmallPNG from "../../../assets/images/bg2.png";
import BackgroundSmallWebp from "../../../assets/images/bg2.webp";

function Background() {
  return (
    <BackgroundStyled>
      <source media="(min-width: 1024px)" srcSet={BackgroundWebp} />
      <source media="(max-width: 1023px)" srcSet={BackgroundSmallWebp} />
      <img
        srcSet={`${BackgroundPNG} 1024w, ${BackgroundSmallPNG}`}
        src={BackgroundPNG}
        alt="Coding Background"
      />
    </BackgroundStyled>
  );
}

export default memo(Background);
