// initialize employee array @ empty
let employees = [];

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
        iD: $('#idIn').val(),
        position: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val(),
        // monthly salary?
        // monthlySalary: (this.annualSalary / 12).val()
    } // end newEmployee

    // push object into employee array
    employees.push(newEmployee);
    // display employee on DOM
    displayEmployees(employees);
} // end addEmployee

function deleteEmployee() {
    console.log('in deleteEmployee');
    
}

function displayEmployees() {

}