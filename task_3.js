// Конструктор - специальный элемент класса похожий на обычный метод вызываемый
// в момент создания объекта(срабатывание конструкции new).
class Product {
  constructor(name, price, count = []) {
    this.name = name;
    this.price = price;
    this.count = count;
    if (this.count === undefined) {
      this.count = 0;
    }
  }
  addOption(name, character) {
    let optionObj = {
      name: name,
      value: character,
    };
    this.count.push(optionObj);
  }
  optionHasValue(op1, op2) {
    for (let key in this.count) {
      if (this.count[key].name === op1 && this.count[key].value === op2) {
        return true;
      }
    }
    return false;
  }
}
let p1 = new Product("Смартфон 1", 200);
p1.addOption("Производитель", "samsung");
p1.addOption("Модель", "a54");
p1.addOption("Кол-во памяти", "64");
let p2 = new Product("Видеокарта", 1000);
p2.addOption("Производитель", "nvidia");
p2.addOption("Модель", "4090");
let p3 = new Product("Смартфон 2", 800);
p3.addOption("Производитель", "apple");
p3.addOption("Модель", "14pro");
p3.addOption("Кол-во памяти", "128");
let p4 = new Product("Смартфон 3", 800);
p4.addOption("Производитель", "samsung");
p4.addOption("Модель", "s22");
p4.addOption("Кол-во памяти", "128");

// let productArr = [p1,p2,p3]

// console.log(p1.optionHasValue('Производитель', 'hh'))
// p1.optionHasValue('Производитель', 'Intel') -> true, false

// for(let key in productArr){
//     if(productArr[key].optionHasValue('Производитель', 'Intel')){
//         console.log(productArr[key].count);
//     }
// }

// Определить товар с наибольшей стоимостью и вывести информаицю о нём в следующем формате:
// Смартфон (800)
// - Производитель: apple
// - Модель: iphone

// let productArr = [p1,p2,p3]
// let max = 0
// let maxProduct
// for(let key in productArr){
//     if(productArr[key].price > max){
//         max = productArr[key].price
//         maxProduct = productArr[key]
//     }
// }
// console.log(`${maxProduct.name} (${max})`);
// for(let item in maxProduct.count){
//     console.log(`- ${maxProduct.count[item].name}: ${maxProduct.count[item].value}`);
// }

// Задание пример №1
// let productArr = [p1, p2, p3, p4];
// let filter = {
//   Производитель: "apple",
//   "Кол-во памяти": "128",
// };
// let find = [];
// for (let key in productArr) {
//   for (let item in filter) {
//     if (productArr[key].optionHasValue(item, filter[item])) {
//       console.log(productArr[key].count);
//     }
//   }
// }

//Задание пример №2
let productArr = [p1, p2, p3, p4];
let filter = {
  "Производитель": "apple",
  "Кол-во памяти": "128",
};
let filtered = productArr.filter((product) => {
  let result = true;
  for (let key in filter) {
    if (!product.optionHasValue(key, filter[key])){
      result = false;
      break;
    }
  }
  return result;
});
console.log(filtered);
