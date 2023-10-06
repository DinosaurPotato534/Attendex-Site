import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import "../styles/MainSection.css";
import LandingMorning from "../LandingMorning";
import LandingAfternoon from "../LandingAfternoon";
import LandingEvening from "../LandingEvening";
import Attendance from "../Attendance";

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

  const landingRef = useRef<HTMLDivElement | null>(null);

  const sr = ScrollReveal({
    origin: "top",
    distance: "20px",
    duration: 1000,
    reset: true,
  });

  useEffect(() => {
    if (landingRef.current) {
      sr.reveal(landingRef.current);
    }
  }, []);

  return (
    <>
      <div className="container">
        <div ref={landingRef} className="landing-section">
          {landingComponent}
        </div>

        <Attendance />
      </div>
    </>
  );
}

export default MainSection;
