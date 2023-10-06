import "./styles/Landing.css";

function LandingAfternoon() {
  const today = new Date();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = dayNames[today.getDay()];
  const month = today.toLocaleString("default", { month: "long" });
  const date = today.getDate();
  const year = today.getFullYear();
  const currentDate = `${day}, ${month} ${date}, ${year}`;

  return (
    <div className="container">
      <h1 className="text1 margintop">Attendex</h1>
      <div className="row">
        <div className="text-center position-relative margintop">
          <img src="/afternoon.png" className="img-fluid" alt="Afternoon" />
          <div className="overlay">
            <h1 className="subtext1">Good Afternoon</h1>
            <h1 className="subtext">{currentDate}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingAfternoon;
