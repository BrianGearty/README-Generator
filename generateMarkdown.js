// function to generate markdown for README
function generateMarkdown(data) {
  return `### ${data.Title} ###

  ## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)

## Description
${data.Description}

## Install 
${data.Install}

## Usage
${data.Usage}

## License
${data.License}

## Contributors
${data.Contributors}

## Questions

# Contact
${data.Contact}

# Username
https://github.com/${data.Username} 

`;
};

module.exports = generateMarkdown;
