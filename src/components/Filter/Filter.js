import React, { Component } from "react";
import "./Filter.css";
import API from "../../utils/API";

class Filter extends Component {
    state = {
        filter: ""
    }

    getEmployees() {
        API.getEmployees().then(res =>
            console.log(res));
    }

    render() {
        return (
            <div className="row">
                <label>Sort By Gender: </label>
                <select>
                    <option>Default</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <button onClick={this.getEmployees}>Sort</button>
            </div>
        )
    }
}

export default Filter;