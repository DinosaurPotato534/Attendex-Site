import "../styles/MainSection.css";
import LandingMorning from "../LandingMorning";
import PeriodTracker from "../Periodtracker";
import Link from "../Link";

function MainSection() {
  return (
    <div className="custom-container main">
      <LandingMorning />
      <PeriodTracker />
      <Link />
    </div>
  );
}

export default MainSection;
