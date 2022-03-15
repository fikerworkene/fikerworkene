import React from "react";
function EmployeeListItem(props)
{
    return(
        <div className="container">
            {props.employeeList.map((list)=>{
                return(
                    <div className="employeeList">
                        <div className="img-container">
                            <img src={list.img} alt="pic"/>
                        </div>
                        <div className="nameList">
                            <p style={{fontWeight:"bold"}}>{list.Name}</p>
                            <p>{list.Occupation}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        )
}


 export default EmployeeListItem;