// We inport all the dependencies and classes that we need.
const inquirer = require('inquirer');
const fs = require("fs");
const {Circle, Triangle, Square} = require('./lib/shapes.js');
const {colorsArray} = require('./colorsArray.js')

// This display the title of the app as soon as it is started.
console.log(`
 ----------------
| LOGO GENERATOR |
 ----------------
`);

//We create the svg tag with this function according to the user's input
function generateSvgTag(answers) {
    let svgTag = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">';
    svgTag += "<g>";
    svgTag += `${answers.shape}`;

    let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgTag += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}" />`;
    svgTag += `<text x="150" y="155" text-anchor="middle" font-size="60" fill="${answers.textColor}">${answers.text.toUpperCase()}</text>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgTag += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
    svgTag += `<text x="150" y="135" text-anchor="middle" font-size="60" fill="${answers.textColor}">${answers.text.toUpperCase()}</text>`;
  } else {
    shapeChoice = new Circle();
    svgTag += `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}"/>`;
    svgTag += `<text x="150" y="125" text-anchor="middle" font-size="60" fill="${answers.textColor}">${answers.text.toUpperCase()}</text>`;
  }

  svgTag += "</g>";
  svgTag += "</svg>";

  return svgTag;
}

// We write the file and put it in the folder "Examples"
function writeSvgToFile(folder, filename, svgTag) {
    const filePath = `${folder}/${filename}`;

  fs.writeFile(filePath, svgTag, (err) => {
    err ? console.log(err) : console.log(`
     ********************
    | Generated logo.svg |
     ********************
     `);
  });
}

// This are all the questions that the user has to answer.
function promptUser(){
    inquirer
    .prompt([
        {
            type:'input',
            name: 'text',
            message: 'Enter your logo name (up to three characters):',
            validate: function(input){
                //This validaes that the length of the text is less than or equal to 3.
                if(input.length <= 3){
                    return true;
                } else{
                    return 'Logo name must be up to three characters in length.';
                }
            }
        },
        {
            type:'input',
            name: 'textColor',
            message: `Enter your text's color (color keyword or a hexadecimal number):`,
            validate: function(input){
                //This validates that the user enters a valid color name.
                const isAColor = colorsArray.includes(input.toLowerCase());
                //This validates that the user enters a valir hex color code.
                const isAHexCode =  /^#[0-9A-F]{6}$/i.test(input);
                return isAColor || isAHexCode || 'Please enter a valid keyword or hex code'
            }
        },
        {
            type:'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type:'input',
            name: 'shapeColor',
            message: `Enter your shape's color (color keyword or a hexadecimal number):`,
            validate: function(input){
                //This validates that the user enters a valid color name.
                const isAColor = colorsArray.includes(input.toLowerCase());
                //This validates that the user enters a valir hex color code.
                const isAHexCode =  /^#[0-9A-F]{6}$/i.test(input);
                return isAColor || isAHexCode || 'Please enter a valid keyword or hex code'
            }
        },
    ])
        .then((answers) => {
            if(answers.text.length > 3){
                console.log('Must enter a value of no more than 3 characters');
                return promptUser();
                
            } else {
                const svgTag = generateSvgTag(answers);
                // Calling write file function to generate SVG file
                writeSvgToFile('examples','logo.svg', svgTag);
            }
        });
    }

// We call the function so the inquirer prompts show up as soon as the app is ran.
promptUser();

