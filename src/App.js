import React from 'react';
import EmployeeContainer from "./components/EmployeeContainer";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Filter />
      <EmployeeContainer />
    </div>
  )
};

export default App;
