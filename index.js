const inquirer = require("inquirer");

inquirer.prompt({
    type:"input",
    name:"username",
    message:"what should I call you?"
}).then(function(answers){
    console.log(`hello ${answers.username}`);
})