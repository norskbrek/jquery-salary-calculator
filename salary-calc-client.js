// initialize employee array @ empty
let employees = [
    {firstName: 'Derek', lastName: 'Chunsler', id: '123', jobTitle: 'Baker', annualSalary: 14400},
    {firstName: 'Brenda', lastName: 'Lipsley', id: '456', jobTitle: 'Cook', annualSalary: 24000},
    { firstName: 'Zaphyre', lastName: 'McPripps', id: '789', jobTitle: 'Soup&ccedilon', annualSalary: 36000}
];
let monthlyCosts = 0;

$(document).ready(readyNow);

// readyNow function (at top; other functions - alphabetical)
function readyNow() {
    $('#submitButton').on('click', addEmployee);
    $('.deleteButton').on('click', deleteEmployee);
        
    displayEmployees(employees);
    calculateMonthlyCosts(employees);
}

function addEmployee() {
    console.log('In addEmployee:');
    
    // user input
    // new object literal
    const newEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        id: $('#idIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val(),
    } 
    // push object into employee array
    employees.push(newEmployee);
    
    // display employee on DOM
    displayEmployees(employees);
    
    // calculate monthly costs
    calculateMonthlyCosts(employees);

    // clear inputs 
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');

} // end addEmployee

function calculateMonthlyCosts(employees) {
    let annualCosts = 0;

    for ( let i = 0; i < employees.length; i++) {
        annualCosts = annualCosts + Number(employees[i].annualSalary);
    }

    // set new monthlyCosts
    monthlyCosts = (annualCosts / 12).toFixed(2);

    // display on DOM
    displayMonthlyCosts();

} // end calculateMonthlyCosts

function deleteEmployee() {
    
    console.log('In deleteEmployee:');

    // let removeId = employees.map(employees.id === $('#removeIdIn'));
    // employees.splice(removeId, 1);

    // console.log('removeId:', removeId);
    
    // loop through employees
    // if current employee object's id matches
    // then remove employee at index
    // for (let i = 0; i < employees.length; i++) {
    //     if (employees[i].id === removeId) {
    //         employees[i].splice(i, 1);
        
    //     }
    //     return employees;
    // }

    // displayEmployees(employees);
} // end deleteEmployee

function displayEmployees(employees) {

    // --- OLD FUNCTION --- EMPLOYEE LIST
    // target ul element
    let el = $('#employeeOut');
    el.empty();
    // loop through the employees
    for (let i = 0; i < employees.length; i++) {
        // display each item as a li: 
        const listItem = `<li><b>Name:</b> ${employees[i].firstName} ${employees[i].lastName} 
            <b>ID:</b> ${employees[i].id} 
            <b>Title:</b> ${employees[i].jobTitle} 
            <b>Annual Salary:</b> ${employees[i].annualSalary}
            <button class="btn btn-danger deleteButton">Remove</button></li>`;
        
            el.append(listItem);
    }
    // let el = $('#employeeOut');
    // el.empty();

    // for (let i = 0; i < employees.length; i++) {
    //     const tableItem = `<tr><td>${employees[i].firstName}</td>
    //         <td>${employees[i].lastName}</td>
    //         <td>${employees[i].id}</td>
    //         <td>${employees[i].jobTitle}</td>
    //         <td>${employees[i].annualSalary}</td>
    //     </tr>`;

    // }
} // end displayEmployees

function displayMonthlyCosts() {
    let el = $('#monthlyCostsOut');
    el.empty();
    el.append(`Monthly Costs: $${monthlyCosts}`);

    if (monthlyCosts > 20000) {
        $('#monthlyCostsOut').css('background-color', 'red');
    }

} // end displayMonthlyCosts