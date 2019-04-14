// initialize employee array @ empty
let employees = [
    {firstName: 'andy', lastName: 'roll', id: '123', jobTitle: 'baker', annualSalary: 144000},
    {firstName: 'paul', lastName: 'john', id: '456', jobTitle: 'cook', annualSalary: 288000}
];
let monthlyCosts = 0;

$(document).ready(readyNow);

// readyNow function (at top; other functions - alphabetical)
function readyNow() {
    $('#submitButton').on('click', addEmployee);
    $('#deleteButton').on('click', deleteEmployee);
    displayEmployees(employees);
    calculateMonthlyCosts(employees);
}

function addEmployee() {
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
    monthlyCosts = annualCosts / 12;

    // display on DOM
    displayMonthlyCosts();

} // end calculateMonthlyCosts

function deleteEmployee(employees) {
    console.log('in deleteEmployee');
    
    let removeId = employees.map(function (employee) {
        return employee.id;
    }).indexOf($('#removeIdIn'));

    employees.splice(removeId, 1);

    console.log('removeId:', removeId);
    
    // loop through employees
    // if current employee object's id matches
    // then remove employee at index
    // for (let i = 0; i < employees.length; i++) {
    //     if (employees[i].id === removeId) {
    //         employees[i].splice(i, 1);
        
    //     }
    //     return employees;
    // }
    displayEmployees(employees);
}

function displayEmployees(employees) {
    console.log('in displayEmployees');

    // --- OLD FUNCTION --- EMPLOYEE LIST
    // target ul element
    let el = $('#employeeOut');
    el.empty();
    // loop through the employees
    for (let i = 0; i < employees.length; i++) {
        // display each item as a li: 
        const listItem = `<li>${employees[i].firstName} ${employees[i].lastName}, 
            ${employees[i].id}, 
            ${employees[i].jobTitle}, 
            ${employees[i].annualSalary}</li>`;
        
            el.append(listItem);

    // let el = $('#tableOutput');
    // el.empty();

    // for (let i = 0; i < employees.length; i++) {
    //     const tableItem = `<tr><td>${employees[i].firstName}</td>
    //         <td>${employees[i].lastName}</td>
    //         <td>${employees[i].id}</td>
    //         <td>${employees[i].jobTitle}</td>
    //         <td>${employees[i].annualSalary}</td>
    //     </tr>`;

    //     el.append(tableItem);

    }
} // end displayEmployees

function displayMonthlyCosts() {
    console.log('in displayMonthlyCosts');

    let el = $('#monthlyCostsOut');
    el.empty();
    el.append(`Monthly Costs: $${monthlyCosts}`);

    if (monthlyCosts > 20000) {
        $('#footer').addClass('overBudget');
    }

} // end displayMonthlyCosts
