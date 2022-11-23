import React from 'react';
import Background from '../../atom/Background';
import Container from '../../atom/Container/Container';
import Description from '../../atom/Description';
import Title from '../../atom/Title';
import SideNav from '../../organisms/SideNav';
import SkillList from '../../organisms/SkillList';
import { AboutTemplateStyled } from './AboutTemplateStyled';
import { intro } from '../../../data/intro';

function AboutTemplate() {
  return (
    <AboutTemplateStyled>
      <Background />
      <SideNav />
      <Container>
        <Title>저는 이런 개발자입니다!</Title>
        <Description>
          {intro}
        </Description>
      </Container>
    </AboutTemplateStyled>
  );
}

export default AboutTemplate;
