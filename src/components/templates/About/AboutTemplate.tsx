import React from "react";
import Background from "../../atom/Background";
import Container from "../../atom/Container/Container";
import Description from "../../atom/Description";
import Title from "../../atom/Title";
import SideNav from "../../organisms/SideNav";
import SkillList from "../../organisms/SkillList";
import { AboutTemplateStyled } from "./AboutTemplateStyled";

function AboutTemplate() {
  return (
    <AboutTemplateStyled>
      <Background />
      <SideNav />
      <Container>
        <Title>저는 이런 개발자입니다!</Title>
        <Description>
          안녕하세요.
          <br />
          2012년 11월 부터 개발자로 시작해서 현재까지도 재미와 보람을 느끼며
          개발을 하고 있는 개발자입니다.
          <br />
          지금까지 프론트앤드, 백앤드 개발 모두 해보았고, 계속해서 하고 있으며,
          배움에는 끝이 없다고 생각해서 계속해서 배워나가고 있습니다.
          <br />
          모든 개발과 기획, 디자인은 연관이 있다고 생각하여 프론트앤드와 백앤드
          뿐만이 아니라 모바일앱 개발과 기획, 디자인에도 관심을 가지고 배워가고
          있습니다.
          <br />
          <br />
          그리고 지금까지 작은 회사에서 문제 해결을 위해서 많은 걸 해와서 어떠한
          문제에 직면을 하더라도 헤쳐나갈수 있다고 말할 수 있습니다.
          <br />
          개발만 생각해서 작업하는게 아닌 UI/UX 적인 요소까지 생각을 하면서
          개발을 하려고 노력합니다.
          <br />
        </Description>
        <SkillList />
      </Container>
    </AboutTemplateStyled>
  );
}

export default AboutTemplate;
