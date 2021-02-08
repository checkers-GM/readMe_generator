var inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

//inquirer questions

inquirer.prompt(
    [
        {
        type: 'input',
        message="Whats the project title?",
        name: 'title',
        // make sure the entry isn't empty
        validate: (value)=> {if(value){return true}else {return 'Please enter a value'}},
        },
        {
            type: 'input',
            message: 'how do you install your app?',
            name:'Installation',
            validate: (value)=> {if(value){return true}else {return 'Please enter a value'}},
        },
        {
            type: 'input',
            message: 'What are the contents of the app?',
            name:'Table of Contents',
            validate: (value)=> {if(value){return true}else {return 'Please enter a value'}},
        },
        {
            type: 'input',
            message: 'How do you use the App?',
            name:'Purpose',
            validate: (value)=> {if(value){return true}else {return 'Please enter a value'}},
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name:'Github',
            validate: (value)=> {if(value){return true}else {return 'Please enter a value'}},
        },
        {
            type: 'input',
            message: 'What is your email?',
            name:'Email',
            validate: (value)=> {if(value){return true}else {return 'Please enter a value'}},
        },
    ]
)