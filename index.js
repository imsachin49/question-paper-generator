// src/main.js
const generateQuestionPaper = require('./questionGenerator');
const Questions=require('./data/sample-data');

const totalMarks = 100;
const difficultyDistribution = [
  { difficulty: 'Easy', percentage: 20 },
  { difficulty: 'Medium', percentage: 50 },
  { difficulty: 'Hard', percentage: 30 },
];

const questionPaper = generateQuestionPaper(totalMarks, difficultyDistribution, Questions);
console.log('Generated Question Paper:');
console.log(questionPaper.length);