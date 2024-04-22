import styled from "styled-components";
import { colors } from "../../GlobalStyle";

export const StatisticList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  min-height: 116px;

  flex-wrap: wrap;
  border: 1.5px dashed rgb(244, 197, 80);
  border-radius: 30px;
`;
export const Experienced = styled.li`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;
export const Number = styled.p`
  font-size: 28px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.56px;
  flex-wrap: wrap;
`;
export const DiscrpStat = styled.p`
  color: ${colors.BLACK_TEXT};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  text-align: start;
  width: ${(props) => props.width || "96px"};
  flex-wrap: wrap;
`;
