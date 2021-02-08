var inquirer = require('inquirer');
const fs = require('fs');

//inquirer questions

inquirer.prompt(
    [
        {
        type: 'input',
        message:"Whats the project title?",
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
            name:'TableofContents',
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
).then(({
    title, 
    Installation,
    TableofContents,
    Purpose, 
    Github,
    Email    
})=>{
    //template
    const template = `# ${title}
    *[Installation](#Installation)
    *[TableofContents](#TableofContents)
    *[Purpose](#Purpose)
    *[Github](#Github)
    *[Email](#Email)

    ##Installation
    ${Installation}
##Table of Contents
    ${TableofContents}
##Purpose
    ${Purpose}
##Github
    ${Github}
##Email
    ${Email}
 `

}

)

// function to create text file
function writeTextFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log('Success')
        }
    })
}

//function to start application
function startProgram () {
    inquirer.prompt(questions)
    .then(function(data) {
        writeTextFile("README.md")
        console.log(data)
    })
}

//Call application

startProgram();