const inquirer = require('inquirer');

class Start {
    constructor(){

    }
    run(){
        return inquirer
        .prompt([
            {
                type:'input',
                name: 'text',
                message: 'Enter your logo name (up to three characters):'
            },
        ])
    }
}

module.exports = Start;
