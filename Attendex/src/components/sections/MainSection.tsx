import "../styles/MainSection.css";
import LandingMorning from "../LandingMorning";
import PeriodTracker from "../Periodtracker";

function MainSection() {
  return (
    <div className="custom-container">
      <LandingMorning />
      <PeriodTracker />
    </div>
  );
}

export default MainSection;
