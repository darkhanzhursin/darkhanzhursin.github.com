// let group = {
//   title: "Our Group",

//   students: ["John", "Pete", "Alice"],

//   showList: function () {
//     const self = this;
//     this.students.forEach(function (student) {
//       console.log(self.title + ": " + student);
//     });
//   },
// };

// let group = {
//   title: "Our Group",

//   students: ["John", "Pete", "Alice"],

//   showList: function () {
//     this.students.forEach((student) => {
//       console.log(this.title + ": " + student);
//     });
//   },
// };

//group.showList.call(group);
//group.showList.bind(group)();
//group.showList.apply(group);

//group.showList();

"use strict";
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList: function () {
    this.students.forEach(function (student) {
      // error – ‘this’ is undefined (or window)
      console.log(group.title + ": " + student);
    });
  },
};
group.showList();
