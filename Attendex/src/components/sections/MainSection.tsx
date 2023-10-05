import "../styles/MainSection.css";
import LandingMorning from "../LandingMorning";
import LandingAfternoon from "../LandingAfternoon";
import LandingEvening from "../LandingEvening";

function MainSection() {
  const currentTime = new Date();
  const hours = currentTime.getHours();

  let landingComponent;

  if (hours >= 5 && hours < 12) {
    landingComponent = <LandingMorning />;
  } else if (hours >= 12 && hours < 17) {
    landingComponent = <LandingAfternoon />;
  } else {
    landingComponent = <LandingEvening />;
  }

  return <div className="custom-container">{landingComponent}</div>;
}

export default MainSection;
