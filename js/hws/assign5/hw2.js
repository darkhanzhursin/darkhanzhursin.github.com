class Student {
  constructor(id) {
    this.id = id;
    this.answers = [];
  }

  addAnswer(question) {
    this.answers.push(question);
  }
}

class Question {
  constructor(qid, answer) {
    this.qid = qid;
    this.answer = answer;
  }

  checkAnswer(studentAnswer) {
    return this.answer == studentAnswer;
  }
}

class Quiz {
  constructor(questions, students) {
    this.questions = questions;
    this.students = students;
  }

  scoreStudentBySid(sid) {
    if (this.students.length == 0) {
      return new Error("Student not found!");
    }

    const student = this.students.find((student) => student.id == sid);

    let score = 0;
    for (let studentAnswer of student.answers) {
      let question = questions.find(
        (q) => q.qid == studentAnswer.qid && q.checkAnswer(studentAnswer.answer)
      );
      if (question) {
        score++;
      }
    }
    return score;
  }

  getAvgScore() {
    if (this.students.length === 0) {
      return new Error("We don't have any students!");
    }

    let totalScore = 0;
    for (let student of this.students) {
      totalScore += this.scoreStudentBySid(student.id);
    }

    return totalScore / this.students.length;
  }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, "a"));
student1.addAnswer(new Question(3, "b"));
student1.addAnswer(new Question(1, "b"));

const student2 = new Student(11);
student2.addAnswer(new Question(3, "b"));
student2.addAnswer(new Question(2, "a"));
student2.addAnswer(new Question(1, "d"));

const students = [student1, student2];
const questions = [
  new Question(1, "b"),
  new Question(2, "a"),
  new Question(3, "b"),
];

const quiz = new Quiz(questions, students);
let scoreForStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreForStudent10);
let scoreForStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreForStudent11);
let average = quiz.getAvgScore();
console.log(average);
