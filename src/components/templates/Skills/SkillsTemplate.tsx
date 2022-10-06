import React from "react";
import Background from "../../atom/Background";
import Container from "../../atom/Container";
import Description from "../../atom/Description";
import Title from "../../atom/Title";
import SideNav from "../../organisms/SideNav";
import SkillLevelList from "../../organisms/SkillLevelList";
import SkillList from "../../organisms/SkillList";
import { SkillsTemplateStyled } from "./SkillsTemplateStyled";

export default function SkillsTemplate() {
  return (
    <SkillsTemplateStyled>
      <Background />
      <SideNav />
      <Container>
        <Title>
          저는 이런 스킬들을
          <br />
          가지고 있습니다.
        </Title>
        <Description>
          저는 2012년 부터 개발일을 시작하여 작은 회사에서 혼자서 모든것을 하다
          보니 프론트앤드와 백앤드 개발을 해왔습니다.
          <br />
          모든걸 다 잘한다고는 할수 없지만, 그동안 해결해온 문제들이 있어 문제
          해결을 어떻게든 할 자신이 있습니다.
          <br />
          <br />
          또한, 개발자는 개발만 잘하면 된다고 생각하지 않아 기획 뿐만이 아니라
          디자인에도 관심을 가지고 개발과 함께 더 많은 것을 배울려고 노력하고
          있습니다.
          <br />
        </Description>
        <SkillLevelList />
        <SkillList />
      </Container>
    </SkillsTemplateStyled>
  );
}
