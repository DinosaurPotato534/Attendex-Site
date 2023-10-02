import "../styles/MainSection.css";
import LandingMorning from "../LandingMorning";
import PeriodTracker from "../PeriodTracker";
import Link from "../Link";

function MainSection() {
  //Add Landing BE code here

  return (
    <div className="custom-container main">
      <LandingMorning />
      <PeriodTracker />
      <Link />
    </div>
  );
}

export default MainSection;
