import React, { Component } from "react";
import API from "../../utils/API";

class EmployeeContainer extends Component {
    state = {
        employees: []
    }
    componentDidMount() {
        API.getEmployees()
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
    
            </div>
        )
    };
}

export default EmployeeContainer;