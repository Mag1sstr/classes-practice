class Order{
    constructor(price, discount = []){
        this.price = price
        this.discount = discount
    }
    getTotalWithDiscounts(){
        let sumDiscount = 0
        for(let key in this.discount){
            sumDiscount += this.discount[key].getPercent(this.price)
        }
        if(sumDiscount > 12){
            sumDiscount = 12
        }
        this.price = this.price - (this.price * sumDiscount) / 100
        return sumDiscount
    }
}
class Fixed {
   getPercent(price){
    return 4 
   }
}
class Special {
    getPercent(price){
    if(price > 250000){
        return 6
    } 
    return 0
    }
}
class Extra {
    getPercent(price){
        let discount = 0
        if(price > 100000){
            discount = 3
        }
        if(price > 150000){
            discount = 5
        }
        if(price > 200000){
            discount = 7
        } 
        return discount
    }
}

let fixed = new Fixed();
// console.log(fixed.getPercent(200_000)); // 4
// Для скидки необходимо реализовать метод получения процентра в зависимости от стоимости.
let special = new Special();
// console.log(special.getPercent(300_000)); // 6

let extra = new Extra()
// console.log(extra.getPercent(110000));



let o1 = new Order(120000, [fixed])
let o2 = new Order(225000, [special,extra])
let o3 = new Order(276000, [fixed, special, extra]) // 17% -> 12%
let o4 = new Order(700000, [special, extra])
let orders = [o1,o2,o3,o4]
for(let order of orders){
    console.log(order.getTotalWithDiscounts());
}

// вывести заказы к которым применена скидка fixed