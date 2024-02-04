#! /usr/bin/env node
console.log(`
 ----------------
| LOGO GENERATOR |
 ----------------
`);

const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  '\nText of the SVG (Enter up to 3 characters): ',
  '\nText color (color name or a hexadecimal number): ',
  `
  circle
  triangle
  square
  
Choose a Shape: `,
  '\nShape\'s color: ',
];
const answers = new Array(3).fill("");


function askQuestion(index) {
  if (index === questions.length) {
    if(answers[2] === "circle"){
       svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="${answers[3]}"/>
        <text x="50%" y="50%" font-size="60" fill="${answers[1]}" text-anchor="middle" alignment-baseline="middle">${answers[0]}</text>
        </svg>`;
    }else if(answers[2] === "triangle"){
      svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <polygon points="150,0 0,200 300,200" fill="${answers[3]}"/>
      <text x="50%" y="60%" font-size="60" fill="${answers[1]}" text-anchor="middle" alignment-baseline="middle">${answers[0]}</text>
      </svg>`;
    }else if(answers[2] === "square"){
      svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <rect x="50" width="200" height="200" fill="${answers[3]}" />
      <text x="50%" y="50%" font-size="60" fill="${answers[1]}" text-anchor="middle" alignment-baseline="middle">${answers[0]}</text>
      </svg>`;
    }else{
      console.log("Please enter a exact shape");
    }
  
  const filename = 'logo.svg';
  
  fs.writeFileSync(filename, svgContent);
  
  console.log(`\n"Generated ${filename}".`);
  rl.close();
  
  process.exit();
  }
  rl.question(questions[index], (answer) => {
    answers[index] = answer;
    if(answers[0].length > 3){
      return askQuestion(0);
    }
    askQuestion(index + 1);
  });
}

askQuestion(0);