import React, { Component } from "react";
import API from "../utils/API";

class EmployeeContainer extends Component {
    state = {
        employees: []
    }
    componentDidMount() {
        API.getEmployees()
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err));
    }
    showEmployees() {
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <button onClick={this.showEmployees}>Console Log</button>
            </div>
        )
    };
}

export default EmployeeContainer;