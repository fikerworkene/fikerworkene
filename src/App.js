import React from "react";
import './App.css';
import Wrapper from './Components/Wrapper';

function App() {
 const [employeeData, setEmployeeData] = React.useState([
   {
     img: "./pic-two.jpg",
     Name: "Jamse King",
     Occupation: "President and CEO",
     CallOffice: "781-000-0000",
     CallMobile: "617-000-0000",
     Sms: "617-000-000",
     email: "james@gmail.com",

   },
   {
    img: "./pic-three.jpg",
    Name: "Julie Taylor",
    Occupation: "VP of marketing",
    CallOffice: "781-000-0000",
     CallMobile: "617-000-0000",
     Sms: "617-000-000",
     email: "julie@gmail.com",

   },
   {
    img: "./pic-four.jpg",
    Name: "Eugene Lee",
    Occupation: "CFO",
    CallOffice: "781-000-0000",
    CallMobile: "617-000-0000",
    Sms: "617-000-000",
    email: "Eugene@gmail.com",

   },
   {
    img: "./pic-five.jpg",
    Name: "John Williams",
    Occupation: "VP of Engineering",
    CallOffice: "781-000-0000",
    CallMobile: "617-000-0000",
    Sms: "617-000-000",
    email: "john@gmail.com",

   },
   {
    img: "./pic-six.jpg",
    Name: "Ray Moore",
    Occupation: "VP of sales",
    CallOffice: "781-000-0000",
    CallMobile: "617-000-0000",
    Sms: "617-000-000",
    email: "ray@gmail.com",

   },
   {
    img: "./pic-seven.jpg",
    Name: "Paul Jones",
    Occupation: "QA manager",
    CallOffice: "781-000-0000",
    CallMobile: "617-000-0000",
    Sms: "617-000-000",
    email: "paul@gmail.com",

   }
 ]);

return(
  <div className="app">
  <Wrapper employeeList={employeeData}/>
  </div>
); 
}
export default App;
