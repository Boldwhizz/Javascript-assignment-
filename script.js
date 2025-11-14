// Array of student objects
const students = [
  { name: "Ada", score: 85 },
  { name: "Bola", score: 43 },
  { name: "Chidi", score: 72 },
  { name: "Dami", score: 50 },
  { name: "Emeka", score: 30 }
];

// 1. map() – Get all student names
const studentNames = students.map(student => student.name);
console.log("Student Names:", studentNames);

// 2. filter() – Find students who passed (score ≥ 50)
const passedStudents = students.filter(student => student.score >= 50);
console.log("Passed Students:", passedStudents);

// 3. reduce() – Calculate average score
const totalScore = students.reduce((sum, student) => sum + student.score, 0);
const averageScore = totalScore / students.length;
console.log("Average Score:", averageScore);

// 4. for loop – Display each student’s result with grade
for (let i = 0; i < students.length; i++) {
  const { name, score } = students[i];
  let grade;

  // 5. if...else – Assign grades
  if (score >= 70) {
    grade = "A";
  } else if (score >= 60) {
    grade = "B";
  } else if (score >= 50) {
    grade = "C";
  } else if (score >= 40) {
    grade = "D";
  } else {
    grade = "F";
  }

  console.log(`name scored{score} - Grade: ${grade}`);
}
