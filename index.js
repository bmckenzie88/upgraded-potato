//Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
//Create an array of questions for user input

inquirer.prompt(
  [
    {
      type: "input",
      message: "What is the name of your project?",
      name: "projectName",
    },
    {
      type: "input",
      message: "Please describe your project",
      name: "description",
    },
    {
      type: "input",
      message: "What installation instructions are there for your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "What usage information is there for your project?",
      name: "usage",
    },
    {
      type: "list",
      message: "What licensing is your project covered under?",
      name: "license",
      choices:["MIT", "GPLv2.0", "GPLv3.0","Apache2.0", "BSD3-Clause", "None"]
    },
    {
      type: "input",
      message: "What contributing guidelines are there for your project?",
      name: "contributing",
    },
    {
      type: "input",
      message: "What are the test instructions for your project?",
      name: "tests",
    },
    {
      type: "input",
      message:
        "Please enter your GitHub username",
      name: "gitName",
    },
    {
      type: "input",
      message:
        "Please enter your email address",
      name: "email",
    },
  ])
    //Create a function to write README file

    .then((response) => {
    
        fs.writeFileSync(`${response.projectName}.md`,
        generateMarkdown(response))
    })
    .catch((err) => console.log(err))
    
    const badgeGenerator = (license) => {
         if (license !== 'None') {
             return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
           }
           return '';
         }

const generateMarkdown = (response) =>`
# ${response.projectName}
${badgeGenerator(response.license)}

## Description

${response.description}

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)


## Installation

${response.installation}

## Usage

${response.usage}

## License

${response.license}

## Contributing

${response.contributing}

## Tests

${response.tests}

## Questions

Visit my GitHub proflie - [${response.gitName}](https://github.com/${response.gitName})


Reach me via email - [${response.email}](mailto:${response.email})


---
`;