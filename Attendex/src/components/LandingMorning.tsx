import "./styles/Landing.css";

function LandingMorning() {
  return (
    <>
      <div className="container content">
        <div className="row">
          <div className="text-center">
            <img src="/sunrise.png" className="img-fluid image" />
            <div className="row">
              <div className="col">
                <h1 className="text">Good Morning</h1>
              </div>
              <div className="col">
                <img src="/morning.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingMorning;
