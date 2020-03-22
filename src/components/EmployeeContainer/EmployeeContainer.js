import React, { Component } from "react";
import API from "../../utils/API";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import Filter from "../Filter/Filter";

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
                <Filter />
                <EmployeeCard employees={this.state.employees}/>
            </div>
        )
    };
}

export default EmployeeContainer;