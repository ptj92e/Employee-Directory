import React, { Component } from "react";
import API from "../../utils/API";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import Filter from "../Filter/Filter";

class EmployeeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
        this.genderFilter = this.genderFilter.bind(this);
    };
    //may not be best practise but we used a refresh page her to call back original state from api
    refreshPage() {
        window.location.reload(false);
    };

    componentDidMount() {
        API.getEmployees()
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err));
    };
    genderFilter(props) {
        console.log(props.employees);
        const gender = document.getElementById("genders").value;
        const genderLower = gender.toLowerCase();
        const newEmployees = props.employees.filter(
            employee => employee.gender === genderLower // you where not matching strings alike. one was uppercase the other lower
        );
        // Below, "this" was not pointed to the actual "this". The genderFilter method needed to bind to the actual "this"
        // so we created the constructor up top and this.genderFilter = this.genderFilter.bind(this);
        this.setState({ employees: newEmployees });
    };
    render() {
        return (
            <div>
                <Filter employees={this.state.employees} genderFilter={this.genderFilter} refreshPage={this.refreshPage}/>
                <EmployeeCard employees={this.state.employees} />
            </div>
        )
    };
}

export default EmployeeContainer;