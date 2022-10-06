import React from "react";
import Background from "../../atom/Background";
import Container from "../../atom/Container";
import Description from "../../atom/Description";
import Title from "../../atom/Title";
import ContactForm from "../../organisms/ContactForm";
import SideNav from "../../organisms/SideNav";
import { ContactTemplateStyled } from "./CpntactTemplateStyled";

export default function ContactTemplate() {
  return (
    <ContactTemplateStyled>
      <Background />
      <SideNav />
      <Container>
        <Title>Contact me</Title>
        <Description>
          저에게 궁금하신 점이 있다면 언제든지 주저하지 말고 연락주세요.
        </Description>
        <ContactForm />
      </Container>
    </ContactTemplateStyled>
  );
}
