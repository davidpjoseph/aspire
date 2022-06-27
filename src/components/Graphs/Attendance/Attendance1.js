import React, { useState, useEffect } from "react";
import {Doughnut} from 'react-chartjs-2';
import './Attendance.css';
import {ref,onValue,} from "firebase/database";
import { db } from "../../../Firebase/Config";
import { useUserAuth } from "../../../Context/userAuthContext";

 function Attendance1()
  {
    
    const [data1, setData1] = useState({});
    const {user}=useUserAuth();
    const useremail =user.email;
    const weak="jasminjames544@gmail.com";
    const bright= "jenniferjohn@gmail.com";
    useEffect(() => {
      if(useremail===weak)
      {const dbRef1 = ref(db, `Attendance/6`);
      onValue(dbRef1, (snapshot) => {
        if (snapshot.val() != null) {
          setData1({ ...snapshot.val() });
        } else {
          setData1({});
        }
      });
      return () => {
        setData1({});
      };}
      if(useremail===bright)
      {const dbRef1 = ref(db, `Attendance/7`);
      onValue(dbRef1, (snapshot) => {
        if (snapshot.val() != null) {
          setData1({ ...snapshot.val() });
        } else {
          setData1({});
        }
      });
      return () => {
        setData1({});
      };}
      else{const dbRef1 = ref(db, `Attendance/3`);
      onValue(dbRef1, (snapshot) => {
        if (snapshot.val() != null) {
          setData1({ ...snapshot.val() });
        } else {
          setData1({});
        }
      });
      return () => {
        setData1({});
      };}
        
      }, []);
    return (
      <div className="AT-card1 AT-margin AT-margin-top AT-white">
        <div className="AT-container AT-white">
          <h4>
            <b>Attendance: CS201</b>
          </h4>
          <div className="chart">
            <Doughnut
              data={{
                labels: ["Present", "Absent"],
                datasets: [
                  {
                    label: "CS201",
                    data: [data1.cs201, 100-data1.cs201],
                    backgroundColor: [
                      "rgba(22,98,208,0.6)",
                      "rgb(213,233,242)",
                      "rgb(236, 137, 56)",
                    ],
                  },
                ],
              }}
              options={{}}
            />
          </div>
        </div>
      </div>
    );
}


export default Attendance1;