import { useState, useEffect } from "react";
import "./styles/PeriodTracker.css";

function PeriodTracker() {
  const regularSchedule = [
    { name: "P1", start: "09:20", end: "10:09", duration: 49 },
    { name: "P2", start: "10:14", end: "11:00", duration: 46 },
    { name: "P3", start: "11:05", end: "11:51", duration: 46 },
    { name: "P4", start: "11:56", end: "12:42", duration: 46 },
    { name: "Lunch", start: "12:47", end: "13:17", duration: 30 },
    { name: "P5", start: "13:22", end: "14:08", duration: 46 },
    { name: "P6", start: "14:13", end: "14:59", duration: 46 },
    { name: "P7", start: "15:04", end: "15:50", duration: 46 },
  ];

  const wednesdaySchedule = [
    { name: "P1", start: "09:20", end: "09:58", duration: 38 },
    { name: "P2", start: "10:03", end: "10:41", duration: 38 },
    { name: "P3", start: "10:46", end: "11:24", duration: 38 },
    { name: "P4", start: "11:29", end: "12:07", duration: 38 },
    { name: "Lunch", start: "12:12", end: "12:42", duration: 30 },
    { name: "P5", start: "12:47", end: "13:25", duration: 38 },
    { name: "P6", start: "13:29", end: "14:07", duration: 38 },
    { name: "P7", start: "14:12", end: "14:50", duration: 38 },
  ];

  const [currentPeriod, setCurrentPeriod] = useState<any | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    function calculateTimeRemaining() {
      const now = new Date();
      const currentDayOfWeek = now.getDay();
      const currentTime = now.getHours() * 60 + now.getMinutes();
      console.log("Current Day of Week:", currentDayOfWeek);
      console.log("Current Time:", currentTime);

      let scheduleToUse = regularSchedule;

      if (currentDayOfWeek === 3) {
        scheduleToUse = wednesdaySchedule;
      }
      console.log("Schedule To Use:", scheduleToUse);

      for (let i = 0; i < scheduleToUse.length; i++) {
        const period = scheduleToUse[i];
        const periodStart = convertToMinutes(period.start);
        const periodEnd = convertToMinutes(period.end);

        if (currentTime < periodStart) {
          setCurrentPeriod(period);
          setTimeRemaining(periodStart - currentTime);
          console.log(
            `Time until ${period.name}: ${formatTime(
              periodStart - currentTime
            )}`
          );
          break;
        } else if (currentTime >= periodStart && currentTime < periodEnd) {
          setCurrentPeriod(period);
          setTimeRemaining(periodEnd - currentTime);
          console.log(
            `Time until ${period.name} ends: ${formatTime(
              periodEnd - currentTime
            )}`
          );
          break;
        }
      }
    }

    function convertToMinutes(timeString: string): number {
      const [hours, minutes] = timeString.split(":");
      return parseInt(hours) * 60 + parseInt(minutes);
    }

    const timerInterval = setInterval(() => {
      calculateTimeRemaining();
    }, 1000);

    calculateTimeRemaining();

    return () => clearInterval(timerInterval);
  }, []);

  function formatTime(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}${remainingMinutes.toString().padStart(2, "0")}`;
  }

  return (
    <div className="container">
      <div className="widget">
        <h1 className="period">
          {currentPeriod ? currentPeriod.name : "No Class"}
        </h1>
        {currentPeriod && (
          <h1 className="timer">{formatTime(timeRemaining)}</h1>
        )}
      </div>
    </div>
  );
}

export default PeriodTracker;
