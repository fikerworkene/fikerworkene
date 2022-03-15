import React from "react";
import HeaderRight from "./HeaderRight";
import EmployeeDetail from "./EmployeeDetail";

function EmployeePage(props) {
  return (
    <div className="employeeDetail-container">
      <div className="employeePage">
        <HeaderRight/>
        <EmployeeDetail employeeDetail={props.employeeList}/>
        </div>
      </div>
 
    
  )
}
 

export default EmployeePage