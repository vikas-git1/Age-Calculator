import React, { useRef, useState } from "react";
import "./AgeCalculator.css";
const Practice = () => {
  const [age, setAge] = useState({ days: 0, months: 0, years: 0 });
  const [dateInput, setDateInput] = useState();
  const handleUserInput = (event) => {
    setDateInput(event.target.value);
  };

  const calculateAge = () => {
    if (!dateInput) return;
    setAge(() => {
      let currDate = new Date();
      let inputDate = new Date(dateInput);

      let years = currDate.getFullYear() - inputDate.getFullYear();
      let months = currDate.getMonth() - inputDate.getMonth();
      let days = currDate.getDate() - inputDate.getDate();

      return { days, months, years };
    });
  };

  const msg = (userName) => {
    return `hellow ${userName}`;
  };
  console.log(msg("Vikas"));
  console.log(msg("Adarsh"));

  let a = 10;
  let c = "Vikas";
  let b = true;
  let d = []
  let e= {}
  let f = ()=>{}


  return (
    <div className="main__container">
      <h1>
        React JS <br /> <span>Age Calculator</span>
      </h1>
      <div className="input__container">
        <input type="date" onChange={handleUserInput} />
        <button onClick={calculateAge}>Calculate</button>
      </div>
      <p>
        You are {age.years} years, {age.months} months and {age.days} days old
      </p>
    </div>
  );
};

export default Practice;
