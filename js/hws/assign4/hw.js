function LinkedList() {
  this.list = [];
  this.add = function (num) {
    this.list.push(num);
  };

  this.remove = function (num) {
    let i = this.list.indexOf(num);
    if (i !== -1) {
      this.list.splice(i, 1);
      console.log(`Removed ${num} from the LinkedList.`);
    } else {
      console.log(`${num} not found in the LinkedList.`);
    }
  };

  this.print = function () {
    console.log(`LinkedList{${this.list}}`);
  };
}

let ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.print();
ll.remove(1);
ll.print();

function Student(firstName, lastName, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = grades;

  this.inputNewGrade = function (newGrade) {
    grades.push(newGrade);
  };

  this.computeAverage = function () {
    const avg =
      this.grades.reduce((acc, curr) => acc + curr) / this.grades.length;
    console.log(avg);
  };
}

let stud = new Student("Darkhan", "Zhursin", [100, 100]);
stud.inputNewGrade(100);
stud.inputNewGrade(90);
stud.inputNewGrade(90);
stud.computeAverage();
