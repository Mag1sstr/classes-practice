// Расписать следующие классы:

// Employee (сотрудник с именем и доходом).
// - Manager (подчинённые) - подчинёнными менеджера могут быть объекты класса
//   Employee и любых его производных.
// - Trader (продовец с объёмом продаж и количеством заказов).
// - Promoter (количество дней) - сотрудник продвигающий бренд на протяжении
//   заданного количества дней.
class Employee {
  constructor(name, income) {
    this.name = name;
    this.income = income;
  }
  totalIncome() {
    let sum = 0;
    sum += this.income;
    return sum;
  }
    managerPart() {
      return 0;
    }
}
class Manager extends Employee {
  constructor(name, income, workers = []) {
    super(name, income);
    this.workers = workers;
  }
  totalIncome() {
    let sum = 0;
    for (let key of this.workers) {
      sum += key.managerPart();
    }
    sum += this.income;
    return sum;
  }
  getWorkersAverageIncome(){
    let avarage = 0
    let count = 0
    for(let key in this.workers){
      count++
      avarage += this.workers[key].totalIncome()
    }
    return avarage / count
  }
  getAvarageSales(){
    let sumSales = 0
    let sumOrders = 0
    for(let key in this.workers){
      if(this.workers[key] instanceof Trader){
        sumSales += this.workers[key].sales
        sumOrders += this.workers[key].orders
      }
    }
    return sumSales / sumOrders
  }
}
class Trader extends Employee {
  constructor(name, income, sales, orders) {
    super(name, income);
    this.sales = sales;
    this.orders = orders;
  }
  totalIncome() {
    let sum = 0;
    sum += this.income;
    sum += (this.sales * 8) / 100;
    return sum;
  }
  managerPart() {
    let percent = 0;
    percent = (this.sales * 5) / 100;
    return percent;
  }
}
class Promoter extends Employee {
  constructor(name, income, days) {
    super(name, income);
    this.days = days;
  }
  managerPart() {
    let percent = 0;
    percent = (this.income * this.days) / 100;
    return percent;
  }
}

// Сотрудник -> Действия которые могут быть выполнены с сотрудником:
// * Получить общий доход -> totalIncome()
// * Получить часть менеджера -> managerPart()

// Trader
// * managerPart() -> 5% от summary

// Promoter
// * managerPart() -> 1% за каждый день от дохода

// Менеджер (Сотрудник) -> при расчёте общего менеджера нужно брать какие-то проценты от подчинённых сотрудников.

// `8_000` (объём продаж), `20` (кол-во заказов).
let john = new Trader("John", 1_500, 8_000, 20);
// console.log("Percent:" + john.managerPart());
// `12_000` (объём продаж), `15` (кол-во заказов).
let jeff = new Trader("Jeff", 1_200, 12_000, 15);
// console.log("Percent:" + jeff.managerPart());
// `30` (кол-во дней работы промоутера).
let mark = new Promoter("Mark", 1_000, 30);
// console.log("Percent:" + mark.managerPart());

let leon = new Manager("Leon", 2_000, [john, jeff, mark]);

let bob = new Employee("Bob", 5000);

// let arr = [john, jeff, mark, leon, bob];
// for (let key of arr) {
//   console.log(key.totalIncome());
// }

// Метод должен вернуть средний доход среди подчинённых.
// let average = leon.getWorkersAverageIncome();
// console.log(average);

let avSales = leon.getAvarageSales();
console.log(avSales);





// Для всех сотрудников необходимо реализовать метод получения общего дохода
// под названием `totalIncome()`, но необходимо учитывать следующие особенности
// работы этого метода для каждого отдельно взятого сотрудника:

// Общий доход `Employee` это `income`.

// Общий доход `Trader` это `income` + 8% от его объёма продаж.

// Общий доход `Manager` это сумма из:
// 1) Его личного дохода (`income`).
// 2) 5% от объёма продаж каждого подчинённого `Trader`.
// 3) 1% от дохода отдельно взятого `Promoter` за каждый день его работы.
