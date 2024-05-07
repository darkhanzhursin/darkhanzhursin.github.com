// 1.Create a function using function declaration named sum with one parameter of Array type, the
// returned result is the sum of all elements which are greater than 20.

function sum(arr) {
  let total = 0;
  for (let i; i < arr.length; i++) {
    if (arr[i] > 20) {
      total += arr[i];
    }
  }
  return total;
}

// 2. Create a function using function expression named getNewArray with one parameter of String
// Array, return a new array which contains all string, length is greater than and equal to 5, and
// contains letter ‘a’.

const getNewArray = function (stringArray) {
  return stringArray.filter((str) => str.length >= 5 && str.includes("a"));
};

// 3. Implement an arrow function with feature below:
// concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world']

const concat = (str, ...arrays) => {
  let result = [...str];
  arrays.forEach((arr) => {
    if (Array.isArray(arr)) {
      result = [...result, ...arr];
    }
  });
  return result;
};

const students = [
  { name: "Quincy", grades: [99, 88], courses: ["cs301", "cs303"] },
  { name: "Jason", grades: [29, 38], courses: ["cs201", "cs203"] },
  { name: "Alexis", grades: [79, 78], courses: ["cs105", "cs211"] },
  { name: "Sam", grades: [91, 82], courses: ["cs445", "cs303"] },
  { name: "Katie", grades: [66, 77], courses: ["cs303", "cs477"] },
];

const averageGrades = students
  .filter((student) => student.courses.includes("cs303")) // Filter students who took cs303
  .map((student) => ({
    name: student.name,
    average:
      student.grades.reduce((acc, curr) => acc + curr, 0) /
      student.grades.length,
  })) // Map to an array of objects with name and average grade
  .reduce((acc, student) => {
    acc[student.name] = student.average;
    return acc;
  }, {});

console.log(averageGrades);
