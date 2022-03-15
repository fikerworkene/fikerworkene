import React from "react";
import "./Style.css";
function EmployeeDetail(props)
{
    return(
        <div className="container">
            {props.employeeDetail
            .filter(item=> item.Name==="Julie Taylor")
            .map((list)=>{
                return(
                    <div className="employeeDetail-container">
                        <div className="employeeList">
                        <div className="img-container">
                            <img src={list.img} alt="pic"/>
                        </div>
                        <div className="nameList">
                            <p style={{fontWeight:"bold"}}>{list.Name}</p>
                            <p>{list.Occupation}</p>
                        </div>
                    </div>
                        <div className="more-detail">
                            <div className="callOffice">
                                <p><span style={{fontWeight:"bold"}}>Call Office:</span></p>
                                <p>{list.CallOffice}</p>
                            </div>
                             <div className="callMobile">
                                <p><span style={{fontWeight:"bold"}}>Mobile:</span></p>
                                <p>{list.CallMobile}</p>
                            </div>
                            <div className="sms">
                                <p><span style={{fontWeight:"bold"}}>SMS:</span></p>
                                <p>{list.Sms}</p>
                            </div>
                            <div className="email">
                                <p><span style={{fontWeight:"bold"}}>Email:</span></p>
                                <p>{list.email}</p>
                            </div>
                        </div>
                    </div>
                )
                })}
        </div>
        )
}

export default EmployeeDetail;