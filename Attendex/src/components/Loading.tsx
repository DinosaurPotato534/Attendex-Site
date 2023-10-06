import { useState, useEffect } from "react";
import "./styles/Loading.css";

function Loading() {
  const [count, setCount] = useState<number | null>(100);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count !== null && count > 1) {
        setCount(count - 1);
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setFadeOut(true);
        }, 100);
      }
    }, 30);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <div className={`background${fadeOut ? " fade-out" : ""}`}>
      <div className="centered-content">
        <img
          src="/ATTENDEX.png"
          className={`cover${fadeOut ? " fade-out" : ""}`}
          alt="Background"
        />
        {count !== null && <h1 className="text">{count}</h1>}
      </div>
    </div>
  );
}

export default Loading;
