import React from "react";
import HomePage from './HomePage';
import EmployeePage from './EmployeePage';
import "./Style.css";

function Wrapper(props) {
  return (
    <div className = "wrapper-container">
      <div className="wrapper">
        <HomePage employeeList={props.employeeList}/>
        <EmployeePage employeeList={props.employeeList}/>
        </div>
        </div>
      
  );
}

export default Wrapper