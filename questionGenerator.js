function getMarksForDifficulty(difficulty) {
  switch (difficulty) {
    case 'Easy':
      return 5;
    case 'Medium':
      return 10;
    case 'Hard':
      return 20;
    default:
      return 0;
  }
}

function generateQuestionPaper(totalMarks, difficultyDistribution, Questions) {
  try {
    const questionPaper = [];
    const difficulties = difficultyDistribution.map(entry => entry.difficulty);

    for (const difficulty of difficulties) {
      const marks = getMarksForDifficulty(difficulty);
      const count = Math.round((difficultyDistribution.find(entry => entry.difficulty === difficulty).percentage / 100) * totalMarks) / marks;

      // Fetch all questions from the array for the given difficulty
      const allQuestions = Questions.filter(question => question.difficulty === difficulty);

      // Take a random subset of questions based on the count
      const selectedQuestions = allQuestions.slice(0, count);

      // Use a Set to keep track of unique questions added to the paper
      const uniqueQuestions = new Set();

      // Add questions to the paper
      for (const question of selectedQuestions) {
        // Ensure the total marks of the paper does not exceed the required totalMarks
        if (questionPaper.reduce((acc, q) => acc + q.marks, 0) + marks <= totalMarks) {
          // Check if the question is not already in the paper
          if (!uniqueQuestions.has(question.id.toString())) {
            questionPaper.push({ ...question, marks });
            uniqueQuestions.add(question.id.toString());
          }
        }
      }
    }
    return questionPaper;
  } catch (error) {
    console.log("error in generating Questions", error);
  }
}

module.exports = generateQuestionPaper;
