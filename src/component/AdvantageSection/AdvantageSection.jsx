// import React from "react";
import { Link } from "react-router-dom";
import {
  BlockDiscriptions,
  Button,
  Discrp,
  HeroImg,
  Span,
  SpanLang,
  SpanTheBest,
  Title,
  Wrap,
} from "./AdvantageSection.styled";
import heroImg from "../../assets/img/heroImg.png";

const AdvantageSection = () => {
  return (
    <Wrap>
      <BlockDiscriptions>
        <Title>
          <Span>Unlock your potential with</Span>
          {"  "}
          <SpanTheBest>the best</SpanTheBest> <SpanLang>language</SpanLang>{" "}
          <SpanTheBest>tutors</SpanTheBest>
        </Title>
        <Discrp>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </Discrp>
        <Link to="teachers">
          <Button type="button">Get started</Button>
        </Link>
      </BlockDiscriptions>

      <HeroImg src={heroImg} alt="sticker" />
    </Wrap>
  );
};

export default AdvantageSection;
