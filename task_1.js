class Human {
    name;
    age;
}

class City{
    name;
    people=[];
    addPeople(human){
        this.people.push(human)
    }
    adultPeople(){
        let sumAdult = 0
        for(let key in this.people){
            if(this.people[key].age >=18){
                sumAdult++
            }
        }
        console.log('Совершеннолетних: ' + sumAdult);
    }
}
let h1 = new Human()
h1.name = 'Дима'
h1.age = 16
let h2 = new Human()
h2.name = 'Саша'
h2.age = 19
let h3 = new Human()
h3.name = 'Рома'
h3.age = 15

let astana = new City()
astana.name = 'Astana'
astana.addPeople(h1)
astana.addPeople(h2)
astana.addPeople(h3)

console.log(astana);
astana.adultPeople()
