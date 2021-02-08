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
            message: 'Description of the app',
            name:'Description',
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
    Description,
    Contributing,
    Purpose, 
    Github,
    Email    
})=>{
    //template
    const template = `# ${title}
    *[Installation](#Installation)
    *[Description](#Description)
    *[TableofContents](#TableofContents)
    *[Purpose](#Purpose)
    *[Github](#Github)
    *[Email](#Email)

    ##Installation
    ${Installation}
    ##Description
    ${Description}
##Contributing
    ${Contributing}
##Purpose
    ${Purpose}
##Github
    ${Github}
##Email
    ${Email}`;
writeTextFile(title, template);
}
);

function writeTextFile(fileName, data){
    fs.writeFile(fileName, data, (err)=>{
        if(err){
            console.log(err)
        }
        console.log('I created a ReadMe file!');
    })
}

