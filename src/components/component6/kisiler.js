import React from "react";
import Kisi from "./kisi";
import students from "./Students.json";
import "./style.scss";

const Kisiler = () => {
  return (
    <div className="st-container">
      {students.map((student, index) => (
        <Kisi key={index} student={student} />
        /* burda student'a atamana rağmen objeyi kisi componentinde props'a student yazzarken yine de süslü içinde yazacaksın */
      ))}
    </div>
  );
};

export default Kisiler;
