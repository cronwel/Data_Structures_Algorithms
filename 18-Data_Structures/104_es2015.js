class Student {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
    this.scores = [];
  }

  fullName(){
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate(){
    this.tardies += 1;
    if(this.tardies >=3){
      return "You are expelled!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times!`; 
  }

  addScores(scores){
    this.scores.push(scores);
    return this.scores;
  }
  calculateAverage(){
    let sum = this.scores.reduce(function(a,b){return a+b;})
    let average = sum/this.scores.length;
    return average;
  }

  static enrollStudents(){
    return "Enrolling students"
  }

};

let firstStudent = new Student("really", "dumb");
console.table(firstStudent);

firstStudent.markLate();
firstStudent.markLate();
firstStudent.markLate();
firstStudent.addScores(89);
firstStudent.addScores(99);
firstStudent.addScores(84);
firstStudent.addScores(76);
firstStudent.addScores(70);

console.table(firstStudent);
console.log(firstStudent.fullName());
console.log(firstStudent.tardies);
console.log(firstStudent.markLate());
console.log(firstStudent.calculateAverage());
