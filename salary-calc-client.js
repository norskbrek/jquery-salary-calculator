// initialize employee array @ empty
let employees = [];
let monthlyCosts = 0;

$(document).ready(readyNow);

// readyNow function (at top; other functions - alphabetical)
function readyNow() {
    $('#submitButton').on('click', addEmployee);
    $('#deleteButton').on('click', deleteEmployee);
    displayEmployees(employees);
}

function addEmployee() {
    console.log('in addEmployee');
    // user input
    // new object literal
    const newEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        id: $('#idIn').val(),
        position: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val(),
        // monthly salary?
        // monthlySalary: (this.annualSalary / 12).val()
    } 

    // push object into employee array
    employees.push(newEmployee);
    // display employee on DOM
    displayEmployees(employees);

    // calculate monthly costs
    monthlyCosts += Number($('#annualSalaryIn').val());


    // clear inputs 
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');

} // end addEmployee

function deleteEmployee(employees) {
    console.log('in deleteEmployee');
    
    let removeId = $('#idIn');
    let el = $('#employeeOut');
    el.empty();
    // loop through employees
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === removeId) {
            el.empty();
        }
    }
    
    
    
}

function displayEmployees(employees) {
    console.log('in displayEmployees');
    // target ul element
    let el = $('#employeeOut');
    el.empty();
    // loop through the inventory
    for (let i = 0; i < employees.length; i++) {
        // display each item as a li: <li>SIZE, COLOR: DESCRIPTION</li>
        const listItem = `<li>${employees[i].firstName} ${employees[i].lastName},
            ${employees[i].id}, 
            ${employees[i].jobTitle},
            ${employees[i].annualSalary}</li>`;
        el.append(listItem);
    }
}
