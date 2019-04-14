// initialize employee array @ empty
let employees = [
    // {firstName: 'Derek', lastName: 'Chunsler', id: '123', jobTitle: 'Baker', annualSalary: 14400},
    // {firstName: 'Brenda', lastName: 'Lipsley', id: '456', jobTitle: 'Cook', annualSalary: 24000},
    // {firstName: 'Zaphyre', lastName: 'McPripps', id: '789', jobTitle: 'Soup&ccedilon', annualSalary: 36000}
];
let monthlyCosts = 0;

$(document).ready(readyNow);

// readyNow function (at top; other functions - alphabetical)
function readyNow() {
    console.log('We are ready.');
    
    $('#submitButton').on('click', addEmployee);
        
    // displayEmployees(employees);
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
    displayEmployees();

    // calculate monthly costs
    calculateMonthlyCosts(employees);

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
    
    // let removeId = thisEmployee.parent().id;
    // //loop through employees
    // //if current employee object's id matches
    // //then remove employee at index
    // for (let i = 0; i < employees.length; i++) {
    //     if (removeId === employees[i].id) {
    //         employees[i].splice(i, 1);
        
    //     }
       
    // }

    // thisEmployee.remove();

    //displayEmployees(employees);
} // end deleteEmployee

function displayEmployees() {

    let tableItem = employees[employees.length-1];
    
    $('#tableBody').append(`
        <tr>
            <td>${tableItem.firstName}</td>
            <td>${tableItem.lastName}</td>
            <td>${tableItem.id}</td>
            <td>${tableItem.jobTitle}</td>
            <td>${tableItem.annualSalary}</td>
            <td><button id="#deleteButton">Delete</button></td>
        </tr>`);

    $('#deleteButton').on('click', function() {
        deleteEmployee($(this));
    });
    

    // for (let i = 0; i < employees.length; i++) {
    //     const tableItem = `<tr><td>${employees[i].firstName}</td>
    //         <td>${employees[i].lastName}</td>
    //         <td>${employees[i].id}</td>
    //         <td>${employees[i].jobTitle}</td>
    //         <td>${employees[i].annualSalary}</td>
    //     </tr>`;

    //     el.append(tableItem);

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