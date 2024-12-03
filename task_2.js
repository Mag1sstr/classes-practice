// Расписать классы для следующих абстрактных сущностей:
// 1) Товар (название, стоимость, количество).
// 2) Заказ (скидка, товары).

// Реализовать методы для заказа:
// * Метод для добавления товара в заказ при условии что он есть в нужном количестве.
// * Метод для получения общей ситомости заказа с учётом скидка.
class Product{
    name;
    price;
    count;
}
class Order{
    discount;
    products = [];
    addOrder(product){
        if(product.count > 0){
            this.products.push(product)
            product.count -= 1
        }
    }
    totalPrice(){
        for(let key in this.products){
            let price = this.products[key].price -= (this.products[key].price * this.discount) / 100
            console.log(`Стоимость ${this.products[key].name} с учетом скидки: ${price} `);
        }
    }
}
let p1 = new Product()
p1.name = 'Хлеб'
p1.price = 200
p1.count = 3
let p2 = new Product()
p2.name = 'Молоко'
p2.price = 400
p2.count = 1
let p3 = new Product()
p3.name = 'Вафли'
p3.price = 520
p3.count = 2

let or1 = new Order()
or1.discount = 10
or1.addOrder(p1)
or1.addOrder(p2)
console.log(or1);
or1.totalPrice()

