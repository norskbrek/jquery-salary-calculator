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

function deleteEmployee() {
    console.log('in deleteEmployee');
    
    let removeId = $('#removeIdIn').val();
    console.log('removeId', removeId);
    
    // loop through employees
    // if current employee object's id matches
    // then remove employee at index
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === $('#removeIdIn')) {
            employees.slice(i, 1);
        
        }
    }
    displayEmployees(employees);

    $('#removeIdIn').val('');
}

function displayEmployees(employees) {
    console.log('in displayEmployees');
    // target ul element
    let el = $('#employeeOut');
    el.empty();
    // loop through the inventory
    for (let i = 0; i < employees.length; i++) {
        // display each item as a li: <li>SIZE, COLOR: DESCRIPTION</li>
        const listItem = `<li>${employees[i].firstName} ${employees[i].lastName}, ${employees[i].id}, ${employees[i].jobTitle}, ${employees[i].annualSalary}</li>`;
        el.append(listItem);
    }
}

function displayMonthlyCosts() {

}
