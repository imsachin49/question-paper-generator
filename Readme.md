# Question Paper Generator
A Node.js application to generate question papers based on specified difficulty distribution.

## Table of Contents

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Sample Data](#sample-data)
- [Contributing](#contributing)

## Introduction

The Question Paper Generator is a Node.js application that allows you to generate question papers based on specified difficulty distributions, subject to a total mark constraint.

## Requirements

To run this application, you need to have [Node.js](https://nodejs.org/) installed on your machine.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/imsachin49/question-paper-generator.git

2. Navigate to the project directory:
    ```bash
    cd question-paper-generator

3. Install dependencies:(Not Required)
    ```bash
    npm install

## Usage

To generate a question paper, run the following command:

```bash
$ node index.js


## Configuration

You can customize the question paper generation by modifying the configuration in the `index.js` file. Adjust the `totalMarks` and `difficultyDistribution` according to your requirements.

```bash
$
{
  "totalMarks": 100,
  "difficultyDistribution": {
    "Easy": 20,
    "Medium": 40,
    "Hard": 40
  }
}


## Sample Data

The sample questions are stored in the data/questions.js file. You can customize this file with your own set of questions
or add your dB to store & retrive the customized questions.

## Contributing

If you find any issues or have suggestions for improvement, feel free to open an issue or create a pull request.
