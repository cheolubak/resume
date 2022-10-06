import React, { memo } from "react";
import { IconImageStyled } from "./IconImageStyled";

import AngularPNG from "../../../assets/images/angular.png";
import AngularWebp from "../../../assets/images/angular.webp";
import AWSPNG from "../../../assets/images/aws.png";
import AWSWebp from "../../../assets/images/aws.webp";
import FigmaPNG from "../../../assets/images/figma.png";
import FigmaWebp from "../../../assets/images/figma.webp";
import FirebasePNG from "../../../assets/images/firebase.png";
import FirebaseWebp from "../../../assets/images/firebase.webp";
import FlutterPNG from "../../../assets/images/flutter.png";
import FlutterWebp from "../../../assets/images/flutter.webp";
import GoogleAnalyticsPNG from "../../../assets/images/google analytics.png";
import GoogleAnlayticsWebp from "../../../assets/images/google analytics.webp";
import MySQLPNG from "../../../assets/images/mysql.png";
import MySQLWebp from "../../../assets/images/mysql.webp";
import NextPNG from "../../../assets/images/next.png";
import NextWebp from "../../../assets/images/next.webp";
import NodeJSPNG from "../../../assets/images/nodejs.png";
import NodeJSWebp from "../../../assets/images/nodejs.webp";
import ReactPNG from "../../../assets/images/react.png";
import ReactWebp from "../../../assets/images/react.webp";
import SassPNG from "../../../assets/images/sass.png";
import SassWebp from "../../../assets/images/sass.webp";
import SequelizePNG from "../../../assets/images/sequelize.png";
import SequelizeWebp from "../../../assets/images/sequelize.webp";
import SpringPNG from "../../../assets/images/spring.png";
import SpringWebp from "../../../assets/images/spring.webp";
import StroybookPNG from "../../../assets/images/storybook.png";
import StorybookWebp from "../../../assets/images/storybook.webp";
import { IconImageProps } from "./IconImageProps";

function IconImage({ name, ...props }: IconImageProps) {
  return (
    <IconImageStyled>
      <Images name={name} />
    </IconImageStyled>
  );
}
export default memo(IconImage);

function Images({ name }: IconImageProps) {
  switch (name) {
    case "angular":
      return (
        <>
          <source srcSet={AngularWebp} />
          <img src={AngularPNG} alt="Angular" />
        </>
      );
    case "aws":
      return (
        <>
          <source srcSet={AWSWebp} />
          <img src={AWSPNG} alt="AWS" />
        </>
      );
    case "figma":
      return (
        <>
          <source srcSet={FigmaWebp} />
          <img src={FigmaPNG} alt="Figma" />
        </>
      );
    case "firebase":
      return (
        <>
          <source srcSet={FirebaseWebp} />
          <img src={FirebasePNG} alt="Firebase" />
        </>
      );
    case "flutter":
      return (
        <>
          <source srcSet={FlutterWebp} />
          <img src={FlutterPNG} alt="Flutter" />
        </>
      );
    case "google-anlaytics":
      return (
        <>
          <source srcSet={GoogleAnlayticsWebp} />
          <img src={GoogleAnalyticsPNG} alt="Google Analytics" />
        </>
      );
    case "mysql":
      return (
        <>
          <source srcSet={MySQLWebp} />
          <img src={MySQLPNG} alt="MySQL" />
        </>
      );
    case "next":
      return (
        <>
          <source srcSet={NextWebp} />
          <img src={NextPNG} alt="Nextjs" />
        </>
      );
    case "nodejs":
      return (
        <>
          <source srcSet={NodeJSWebp} />
          <img src={NodeJSPNG} alt="Nodejs" />
        </>
      );
    case "react":
      return (
        <>
          <source srcSet={ReactWebp} />
          <img src={ReactPNG} alt="React" />
        </>
      );
    case "sass":
      return (
        <>
          <source srcSet={SassWebp} />
          <img src={SassPNG} alt="SASS" />
        </>
      );
    case "sequalize":
      return (
        <>
          <source srcSet={SequelizeWebp} />
          <img src={SequelizePNG} alt="Sequalize" />
        </>
      );
    case "spring":
      return (
        <>
          <source srcSet={SpringWebp} />
          <img src={SpringPNG} alt="Spring" />
        </>
      );
    case "storybook":
      return (
        <>
          <source srcSet={StorybookWebp} />
          <img src={StroybookPNG} alt="Storybook" />
        </>
      );
  }
}
