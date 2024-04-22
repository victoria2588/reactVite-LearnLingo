import AdvantageSection from "../../component/AdvantageSection/AdvantageSection";
import StatisticsSection from "../../component/StatisticsSection/StatisticsSection";
import { WrapContainer } from "./Home.styled";

export default function Home() {
  return (
    <>
      <WrapContainer>
        <AdvantageSection />
        <StatisticsSection />
      </WrapContainer>
    </>
  );
}
