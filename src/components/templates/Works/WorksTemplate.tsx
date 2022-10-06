import React from "react";
import Background from "../../atom/Background";
import Container from "../../atom/Container";
import Title from "../../atom/Title";
import SideNav from "../../organisms/SideNav";
import WorkList from "../../organisms/WorkList";
import { WorksTemplateStyled } from "./WorksTemplateStyled";

export default function WorksTemplate() {
  return (
    <WorksTemplateStyled>
      <Background />
      <SideNav />
      <Container>
        <Title>저는 이런 일들을 했습니다!</Title>
        <WorkList />
      </Container>
    </WorksTemplateStyled>
  );
}
