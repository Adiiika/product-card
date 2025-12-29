export class Cafe {

    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    
    getCafeInfo() {
        console.log(`Кафе называется ${this.name} и находиться в ${this.location},`);
    }

    orderDrink(drink) {
        drink.serveDrink();
    }

}

