const inquirer = require('inquirer');
//const { join } = require('path');
const fs = require('fs');
const shapes = require('./shapes');
//const svg = require('./svg');

class CLI {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter logo initials - 3 characters max',
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'What color would you like the text of the logo?',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Choose a shape for your logo',
          choices: ['circle', 'triangle', 'square'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'What color would you like the shape to be',
        }
      ])
      .then((data) => {
        const fileName = 'logo.svg'
        fs.writeFile(`output/${fileName}`, shapes.determineShape(data), (err) =>
          err ? console.log(err) : console.log('Generated logo.svg')
        )
      })
  }
};


module.exports = CLI;
