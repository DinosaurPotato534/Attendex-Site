import { useState, useEffect } from "react";
import "./styles/Landing.css";

interface ZenQuote {
  q: string;
  a: string;
}

function LandingAfternoon() {
  const [quoteData, setQuoteData] = useState<ZenQuote | null>(null);

  useEffect(() => {
    const apiUrl =
      "https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: ZenQuote[]) => {
        setQuoteData(data[0]);
      })
      .catch((error) => {
        console.error("Error fetching Zen quote:", error);
      });
  }, []);

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
          <div className="glass"></div>
          <div className="overlay">
            <h1 className="text">Good Afternoon</h1>
            <h1 className="subtext">{currentDate}</h1>
            {quoteData && (
              <p className="quote">
                {quoteData.q} <br /> - {quoteData.a}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingAfternoon;
