import "./styles/Attendance.css";

function Attendance() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 text-center">
          <h1 className="text">Attendance</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="widget"></div>
        </div>
        <div className="col-md-6">
          <div className="widget"></div>
        </div>
      </div>
    </div>
  );
}

export default Attendance;
