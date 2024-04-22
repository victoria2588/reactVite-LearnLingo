import styled from "styled-components";
import { colors } from "../../GlobalStyle";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
  justify-content: center;

  flex-wrap: wrap;
`;

export const BlockDiscriptions = styled.div`
  max-width: 720px;
  border-radius: 30px;
  background: ${colors.SILVER_BACKGROUND};
  padding: 98px 108px 98px 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  flex-basis: 40%;
  @media screen and (max-width: 1158px) {
    max-width: 568px;
  }
  @media screen and (max-width: 1016px) {
    padding: 98px 20px 98px 20px;
  }
`;

export const Title = styled.h1`
  max-width: 548px;
  text-align: start;
  margin-bottom: 32px;
`;

export const Span = styled.span`
  color: ${colors.BLACK_TEXT};
  //font-size: 48px;
  font-size: calc(32px + (48 - 32) * ((100vw - 320px) / (1440 - 320)));
  font-weight: 500;
  line-height: 56px;
  text-align: start;
  font-style: normal;
  letter-spacing: -0.96px;
`;

export const SpanTheBest = styled.span`
  color: ${colors.BLACK_TEXT};
  //font-size: 48px;
  font-size: calc(32px + (48 - 32) * ((100vw - 320px) / (1440 - 320)));
  font-weight: 500;
  line-height: 56px;
  letter-spacing: -0.96px;
  text-align: start;
  font-style: normal;
`;

export const SpanLang = styled.span`
  background-color: ${colors.LIGHT_YELLOW};
  border-radius: 8px;
  max-width: 195px;
  font-style: italic;
  letter-spacing: -0.96px;
  //font-size: 48px;
  font-size: calc(32px + (48 - 32) * ((100vw - 320px) / (1440 - 320)));
  font-weight: 400;
`;

export const Discrp = styled.p`
  text-align: start;
  margin-bottom: 64px;
  color: ${colors.BLACK_TEXT};
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.32px;
  max-width: 471px;
`;

export const Button = styled.button`
  border-radius: 12px;
  background-color: ${colors.YELLOW_BUTTON};
  width: 267px;
  height: 60px;
  color: rgb(18, 20, 23);
  font-family: Roboto;
  //font-size: 18px;
  font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1440 - 320)));
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  border: none;
  &:hover {
    background-color: ${colors.YELLOW_HOVER_BUTTON};
  }
`;

export const HeroImg = styled.img`
  max-width: 100%;
`;
