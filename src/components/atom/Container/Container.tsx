import React, { HTMLAttributes } from "react";
import { css } from "@emotion/css";

function Container({ ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={css`
        padding: 200px 0 0 298px;

        @media screen and (max-width: 1024px) {
          padding: 150px 24px;
        }
      `}
    >
      {props.children}
    </div>
  );
}

export default Container;
