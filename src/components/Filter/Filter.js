import React from "react";
import "./Filter.css";

function Filter(props) {
    
    return (
        <div className="row">
            <label>Sort By Gender: </label>
            <select id="genders">
                <option>Male</option>
                <option>Female</option>
            </select>
            <button onClick={() => props.genderFilter(props)}>Sort</button>
        </div>
    )
}

export default Filter;