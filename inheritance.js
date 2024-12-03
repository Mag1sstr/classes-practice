class Employee {
  constructor(name, income) {
    this.name = name;
    this.income = income;
  }
  totalIncome(){
    let sum = 0
    sum += this.income
    return sum
  }
}

class Worker extends Employee {
  constructor(name, income, bonus) {
    super(name, income);
    this.bonus = bonus;
  }
  totalIncome(){
    let sum = 0
    sum += this.income + this.bonus
    return sum
  }
}
class Trainee extends Employee {
  constructor(name, income, days) {
    super(name, income);
    this.days = days;
  }
}
class Manager extends Worker {
  constructor(name, income, bonus, workers = []) {
    super(name, income, bonus);
    this.workers = workers;
  }
  totalIncome(){
    let sum = 0
    sum += this.income + this.bonus
    sum = sum + (sum * 15) / 100
    return sum
  }
  getAverage(){
    let sumTrainee = 0
    let sumWorkers = 0
    for(let key in this.workers){
      sumWorkers++  
      sumTrainee += this.workers[key].income
      if(this.workers[key] instanceof Worker){
        sumTrainee += this.workers[key].bonus
      }
    }
    return sumTrainee / sumWorkers
  }
  maxSalary(){
    let max = 0
    let maxName
    for(let key in this.workers){
      let sumSal = 0
      sumSal += this.workers[key].income
      if(this.workers[key] instanceof Worker){
        sumSal += this.workers[key].bonus
      }
      if(sumSal > max){
        max = sumSal
        maxName = this.workers[key].name
      }
    }
    return maxName
  }
}

let jared = new Employee("Jared", 1900);
let bill = new Worker("Bill", 2400, 1100);
let bob = new Trainee("Bob", 500, 30);
let man = new Manager("Man", 2800, 900, []);

let arr = [jared, bill, bob, man];

for (const emp of arr) {
  console.log(emp.name + ': ' + emp.totalIncome());
}







// Создать менеджера и для него около 5 подчинённых (2 Worker и 3 Trainee)







// let jared = new Employee("Jared", 1900);
// let bill = new Worker("Bill", 2400, 1100);
// let bob = new Trainee("Bob", 500, 30);
// let man = new Manager("Man", 2800, 900, []);

// console.log(jared);
// console.log(bill);
// console.log(bob);
// console.log(man);

// let emloyees = [jared,bill,bob]
// for(key in emloyees){
//     let name = emloyees[key].name
//     if(!(emloyees[key] instanceof Trainee)){
//         console.log(name);
//     }
// }

// let emloyees = [jared,bill,bob]
// let sum = 0
// for(let i = 0; i < emloyees.length;i++){
//     sum += emloyees[i].income
//     if(emloyees[i] instanceof Worker){
//         sum += emloyees[i].bonus
//     }
// }
// console.log(sum);

// let emloyees = [jared,bill,bob]
// let sum = 0
// let num = 0
// for(key in emloyees){
//     if(emloyees[key] instanceof Worker){
//         sum += emloyees[key].bonus
//     }
//     if(!(emloyees[key] instanceof Trainee)){
//         num++
//         sum += emloyees[key].income
//     }
// }
// sum = sum / num
// console.log(sum);

// let emloyees = [jared, bill, bob, man];
// for (key in emloyees) {
//   if (!(emloyees[key] instanceof Worker)) {
//     let sumAnother = 0;
//     sumAnother += emloyees[key].income;
//     console.log(`${emloyees[key].name}: ${sumAnother}`);
//   }

//   if (emloyees[key] instanceof Worker) {
//     let sumWork = 0;
//     sumWork += emloyees[key].income + emloyees[key].bonus;
//     if (emloyees[key] instanceof Manager) {
//       sumWork = sumWork + (sumWork * 15) / 100;
//     }
//     console.log(`${emloyees[key].name}: ${sumWork}`);
//   }
// }


/////////////////////////////////////////////////////////////////////////////

// // let max = new Employee('Max', 500);
// let denis = new Worker('Denis', 2000, 200)
// let alex = new Worker('Alex', 2100, 300)
// let bob = new Trainee("Bob", 500, 30);
// let maksim = new Trainee("Maksim", 400, 20);
// let oleg = new Trainee("Oleg", 500, 60);



// let dan = new Manager("Man", 2800, 900, [denis,alex,bob,maksim,oleg]);
// console.log(dan.maxSalary());
// // console.log(dan.getAverage()); 
