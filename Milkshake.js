import { Drink } from './Drink.js'

export class Milkshake extends Drink {
    constructor(name, size, price, iceCreamType, addIns, temperature = 0) {
        super(name, size, price, temperature);
        this.iceCreamType = iceCreamType;
        this.addIns = addIns;
    }
    getDrinkInfo() {
        return console.log(`${this.name} на ${this.iceCreamType} с добавкой ${this.addIns} в ${this.size} размере за ${this.price} рублей`)
    }
}