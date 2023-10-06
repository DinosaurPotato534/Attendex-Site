import { useEffect, useState } from "react";
import "./styles/Attendance.css";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ScrollReveal from "scrollreveal";

const firebaseConfig = {
  //firebaseCONFIG


};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Attendance() {
  const [studentsData, setStudentsData] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "students", "students");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const studentsArray = Object.values(data);
          setStudentsData(studentsArray);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "20px",
      duration: 1000,
      reset: true,
    });

    studentsData.forEach((_student: any, index: number) => {
      const widgetRef = `widget${index}`;
      const widget = document.getElementById(widgetRef);

      if (widget) {
        sr.reveal(widget);
      }
    });
  }, [studentsData]);

  return (
    <>
      <div className="container">
        <div className="row">
          {studentsData.map((student: any, index: number) => (
            <div className="col-md-6" key={index}>
              <div className="widget mx-auto" id={`widget${index}`}>
                <h1 className="name">{student[1]}</h1>
                <p className="student-id">{student[0]}</p>
                <p className={student[2].toLowerCase()}>
                  {student[2].charAt(0).toUpperCase() + student[2].slice(1)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="footer">Attendex - Submission to Project Innovation 2023</p>
    </>
  );
}

export default Attendance;
