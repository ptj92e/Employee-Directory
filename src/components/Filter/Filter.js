import React, { Component } from "react";
import "./Filter.css";

class Filter extends Component {
    state = {
        filter: ""
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
                <button>Sort</button>
            </div>
        )
    }
}

export default Filter;