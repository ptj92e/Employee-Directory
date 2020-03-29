# Employee-Directory

This app was developed to display a card for each employee in a company using React.js. If you would like to view the deployed version of this app, please follow this link: https://obscure-waters-52198.herokuapp.com/

## React.js

This app was developed with React.js utilizing different components to create this page. There are only 4 components that are needed for and they use the class, and function methods to render the components. In the utils folder of the app, there is a method that is called when the page loads that called out to a random user api that provides a random list of "employees" that is sent to the employee container page and set to the employee state. The state is then mapped over and for each employee in the state, an employee card is rendered and put into the employee container. 

The user can also filter the list of employees by gender. Depending on which gender is selected, the employee state is filtered and every employee that does not match the gender selected, the employee is filtered out and the new state is rendered to the page. 