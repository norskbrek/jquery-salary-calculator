// initialize employee array
// initialize monthlyCosts
let employees = [
    // {firstName: 'Derek', lastName: 'Chunsler', id: '123', jobTitle: 'Baker', annualSalary: 14400},
    // {firstName: 'Brenda', lastName: 'Lipsley', id: '456', jobTitle: 'Cook', annualSalary: 24000},
    // {firstName: 'Zaphyre', lastName: 'McPripps', id: '789', jobTitle: 'Soup&ccedilon', annualSalary: 36000}

];
let monthlyCosts = 0;

$(document).ready(readyNow);

// readyNow function (at top; other functions - alphabetical)
function readyNow() {
    console.log('in readyNow:');
    // activate submitButton listener
    $('#submitButton').on('click', addEmployee);
    // set monthly costs @ 0
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
    // clear inputs 
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
    // display employee on DOM
    // calculate monthly costs
    displayEmployees();
    calculateMonthlyCosts(employees);
} // end addEmployee

function calculateMonthlyCosts(employees) {
    let annualCosts = 0;
    // loop over array, grab annual salaries, add together
    for ( let i = 0; i < employees.length; i++) {
        annualCosts += Number(employees[i].annualSalary);
    }
    // set new monthlyCosts, fix decimal places
    monthlyCosts = (annualCosts / 12).toFixed(2);
    // display on DOM
    displayMonthlyCosts();
} // end calculateMonthlyCosts

function deleteEmployee() {
    console.log('In deleteEmployee:');
    // target this delete button's row,
    // remove table item
    $(this).parent().parent().remove();

} // end deleteEmployee

function displayEmployees() {
    // set tableItem as last/newest item in employee array
    let tableItem = employees[employees.length-1];
    // target #tableBody element, append table
    $('#tableBody').append(`
        <tr>
            <td>${tableItem.firstName}</td>
            <td>${tableItem.lastName}</td>
            <td>${tableItem.id}</td>
            <td>${tableItem.jobTitle}</td>
            <td>${tableItem.annualSalary}</td>
            <td><button id="deleteButton">Delete</button></td>
        </tr>`);

    // delete button tester
    // --> set employees array to commented items
    // --> add displayEmployees(employees) to readyNow();
    // --> comment out above function ^^^
    // --> then test if button works

    // for (i = 0; i < employees.length; i++) {
    //     let tableItem = employees[i];

    //     $('#tableBody').append(`
    //     <tr>
    //         <td>${tableItem.firstName}</td>
    //         <td>${tableItem.lastName}</td>
    //         <td>${tableItem.id}</td>
    //         <td>${tableItem.jobTitle}</td>
    //         <td>${tableItem.annualSalary}</td>
    //         <td><button id="deleteButton">Delete</button></td>
    //     </tr>`);

    // }

    // activate delete button within each table item
    $('#tableBody').on('click', '#deleteButton', deleteEmployee);  

} // end displayEmployees

function displayMonthlyCosts() {
    let el = $('#monthlyCostsOut');
    el.empty();
    el.append(`Monthly Costs: $${monthlyCosts}`);
    // if true, then change attribute values
    if (monthlyCosts > 20000) {
        $('#monthlyCostsOut').css('background-color', 'red');
    }
} // end displayMonthlyCosts