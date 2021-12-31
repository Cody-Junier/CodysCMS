const inquirer = require('inquirer');
// const companyTemplate = require('./companyTemplate');
const fs = require('fs');
const path = require('path');

const choices = () => {
    inquirer.prompt([
        {
         type:'list',
         name:'options',
         message:'What would you like to do?',
         choices:[
            "view all departments", 
            "view all roles",
            "view all employees", 
            "add a department", 
            "add a role", 
            "add an employee", 
            "update an employee role",
            "quit"
         ]
        }
    ]).then(answers =>{
        console.log(answers);
        switch(answers.options){
            case "view all departments": 
               viewDepartments();
               break; 
            case "view all roles":
                viewRoles();
                break;
            case "view all employees" :
                viewEmployees();
                break;
            case "add a department":
                addDepartment();
                break;
            case "add a role":
                addRole();
                break;
            case "add an employee":
                addEmployee();
                break;
            case "update an employee role":
                updateEmployee();
                break;
            case "quit":
                break;
        }
    })
}

const viewDepartments = () =>{
    console.table(departments)
}
const viewRoles = () =>{
    console.table(departments)
}
const viewEmployees = () =>{
    console.table(departments)
}
const addDepartments = () =>{
}
const addRoles = () =>{
    Manager,
    peon,
    coder
}
const addEmployees = () =>{
    // call db to get all roles
    // map roles to object 
    const roles = res.map(role => {
        return {name: role.title, value: role.id}
    })
    // object will have name, role.title, value (role.id)
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What is the employees' role?",
            choices: roles
        },
        {
            first name
        },
        {
            last name
        },
        {
            manager
        }
    ]).then(
        // add employee to db
    )


}
const updateEmployee = () =>{}

choices();