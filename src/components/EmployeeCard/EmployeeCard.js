import React from "react";
import "./EmployeeCard.css";

function EmployeeCard(props) {
    return (
        <div>
            {props.empoloyees.map(employee => (
                <div className="col-4">
                    <img src={employee.picture.medium}></img>
                    <p id={employee.gender}>{employee.name.first + " " + employee.name.last}</p>
                </div>
            ))}
        </div>
    )
}

export default EmployeeCard;