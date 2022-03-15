import React from "react";
import HeaderLeft from "./HeaderLeft";
import Search from "./Search";
import EmployeeListItem from "./EmployeeListItem";

function HomePage(props) {
    return(
        <div className="homePage" >
        <HeaderLeft/>
        <Search/>
        <EmployeeListItem employeeList={props.employeeList}/>
        </div>
        

    );
     
}
export default HomePage;