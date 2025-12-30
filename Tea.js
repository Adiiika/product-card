import { Drink } from './Drink.js'

export class Tea extends Drink {
    constructor(name, size, price, teaType, additives, temperature = 75) {
        super(name, size, price, temperature);
        this.teaType = teaType;
        this.additives = additives;
    }

    getDrinkInfo() {
        console.log(`${this.name} c сортом ${this.teaType} с добавлением ${this.additives} в ${this.size} размере за ${this.price} рублей`)
    }
}