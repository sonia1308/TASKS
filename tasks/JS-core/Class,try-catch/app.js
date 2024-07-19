function Employee(name, surname, job, salary, yearlySal) {
  this.name = name;
  this.surname = surname;
  this.job = job;
  this.salary = salary;
  this.changeJobSal = function (job, salary) {
    return `${name} ${surname} has changed her job to ${(this.job =
      job)} and her new salaray is ${(this.salary = salary)}, yearly ${
      this.salary * 12
    };`;
  };
}

const Sonia = new Employee(`sonia`, `hamidova`, `front-end developer`);
console.log(Sonia);
console.log(Sonia.changeJobSal(`back-end developer`, 2600));
console.log(Sonia);
