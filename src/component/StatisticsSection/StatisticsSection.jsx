// import React from "react";

import {
  DiscrpStat,
  Experienced,
  Number,
  StatisticList,
} from "./StatisticsSection.styled";

const StatisticsSection = () => {
  return (
    <StatisticList>
      <Experienced>
        <Number>3,200 +</Number>
        <DiscrpStat>Experienced tutors</DiscrpStat>
      </Experienced>
      <Experienced>
        <Number>300,000 +</Number>
        <DiscrpStat>5-star tutor reviews</DiscrpStat>
      </Experienced>
      <Experienced>
        <Number>120 +</Number>
        <DiscrpStat width="74px">Subjects taught</DiscrpStat>
      </Experienced>
      <Experienced>
        <Number>200 +</Number>
        <DiscrpStat>Tutor nationalities</DiscrpStat>
      </Experienced>
    </StatisticList>
  );
};

export default StatisticsSection;
