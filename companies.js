class Company {
  constructor(name, income, tax) {
    this.name = name;
    this.income = income;
    this.tax = tax;
  }
  getIncomeAfterTax() {
    return this.income - (this.income * this.tax.percent) / 100;
  }
  getTaxAmount() {
    return (this.income * this.tax.percent) / 100;
  }
}

class BossTax {
  name = "boss";
  percent = 0;
}

class Simplified extends BossTax {
  name = "simplified";
  percent = 3;
}
class Common extends BossTax {
  name = "common";
  percent = 10;
}
class Patent extends BossTax {
  name = "patent";
  percent = 1;
}

let simplified = new Simplified(); // 3%
let common = new Common(); // 10%
let patent = new Patent(); // 1%
// console.log(common.percent);
let runtime = new Company("Runtime", 2_400_000, simplified);
let arta = new Company("Arta", 90_000_000, common);
let john = new Company("John", 1_100_000, simplified);

let companies = [runtime, arta, john];

let max = 0;
let maxName;
let obj = {};

let sum = 0;
obj = {
  simplified: 0,
  common: 0,
  patent: 0,
};
for (const company of companies) {
  for (key in obj) {
    if (key == company.tax.name) {
      obj[key] += company.getTaxAmount();
    }
  }

  if (max < company.getTaxAmount()) {
    // console.log(company.getIncomeAfterTax()); // Прибыль компании после вычета налога.
    // console.log(company.getTaxAmount()); // Размер налога для уплаты.
    max = company.getTaxAmount();
    maxName = company.name;
  }
}

console.log(obj);
// console.log(company.tax.name +': '+ company.getTaxAmount());
// console.log(maxName + ': ' + max);
