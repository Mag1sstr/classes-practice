class Product{
    name;
    price;
    count;
    sell(countToSell){
        if(countToSell > this.count){
            console.log("Товара нет в наличии");
        }else{
            console.log(`Товар ${this.name} продан в количестве: ${countToSell}`);
            this.count = this.count - countToSell
        }
    }
    exists(){
        if(this.count > 0){
            return true
        }
        return false
    }
}
let p1 = new Product()
p1.name = 'Хлеб'
p1.price = 170
p1.count = 5
let p2 = new Product()
p2.name = 'Молоко'
p2.price = 420
p2.count = 0
// console.log(p1);
p1.sell(5)
p2.sell(1)
p1.sell(1)