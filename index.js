const inquirer = require('inquirer');
const fs = require("fs");
const {Circle, Triangle, Square} = require('./lib/shapes.js');
console.log(`
 ----------------
| LOGO GENERATOR |
 ----------------
`);

function writeTheFile(filename, answers){
    let svgTag = "";
    
    svgTag = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">';
    svgTag += "<g>";
    svgTag += `${answers.shape}`;

    let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgTag += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}" />`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgTag += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgTag += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
  }

  svgTag += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  svgTag += "</g>";
  svgTag += "</svg>";

  fs.writeFile(filename, svgTag, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}


function promptUser(){
    inquirer
    .prompt([
        {
            type:'input',
            name: 'text',
            message: 'Enter your logo name (up to three characters):'
        },
        {
            type:'input',
            name: 'textColor',
            message: `Enter your text's color (color keyword or a hexadecimal number):`
        },
        {
            type:'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type:'input',
            name: 'shapeColor',
            message: `Enter your shape's color (color keyword or a hexadecimal number):`
        },
    ])
        .then((answers) => {
            if(answers.text.length > 3){
                console.log('Must enter a value of no more than 3 characters');
                return promptUser();
                
            } else {
                writeTheFile('logo.svg', answers);
            }
        });
    }

promptUser();

