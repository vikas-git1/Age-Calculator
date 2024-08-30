import React, { useRef, useState } from "react";
import "./AgeCalculator.css";
const AgeCalculator = () => {
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
  const dateInputRef = useRef(null);

  const handleCalculateAge = () => {
    let userDateInput = dateInputRef.current.value;
    setAge(() => {
      const today = new Date();
      const birthDate = new Date(userDateInput);
      //   console.log(today, birthDate);

      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();
      //   console.log(years, months, days);

      if (months < 0) {
        --years;
        months += 12;
      }

      if (days < 0) {
        --months;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }
      return { years, months, days };
    });
  };
  return (
    <div className="main__container">
      <h1>
        React JS <br /> <span>Age Calculator</span>
      </h1>
      <div className="input__container">
        <input type="date" ref={dateInputRef} />
        <button onClick={handleCalculateAge}>Calculate</button>
      </div>
      {age.months > 0 ? (
        <p>{`You are ${age.years} years, ${age.months} months and ${age.days} days old.`}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default AgeCalculator;
