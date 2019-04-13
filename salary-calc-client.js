// initialize employee array @ empty
let employees = [];
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
    console.log('in addEmployee');
    console.log("Who's the man now, dog?");
    console.log('----------------------');
    console.log('I am! Yay! :)');
    
    
    
    // user input
    // new object literal
    const newEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        id: $('#idIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val(),
        // monthly salary?
        // monthlySalary: (this.annualSalary / 12).val()
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

    monthlyCosts = annualCosts / 12;
    //return monthlyCosts;
} // end calculateMonthlyCosts

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
