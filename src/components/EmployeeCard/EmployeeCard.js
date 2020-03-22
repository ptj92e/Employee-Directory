import React from "react";
import "./EmployeeCard.css";

function EmployeeCard(props) {
    
    return (
        <div className="container">
            <div className="row">
                {props.employees.map(employee => (
                    <div className="employeeCard">
                        <img alt={employee.name.first + employee.name.last}src={employee.picture.large}></img>
                        <h3>{employee.name.first + " " + employee.name.last}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EmployeeCard;