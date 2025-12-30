import { Drink } from './Drink.js'

export class Coffee extends Drink {
    constructor(name, size, price, milkType, beanType, temperature = 80) {
        super(name, size, price, temperature);
        this.milkType = milkType;
        this.beanType = beanType;
    }

    getDrinkInfo() {
        return console.log(`${this.name} на ${this.milkType} и также на ${this.beanType} в ${this.size} размере за ${this.price} рублей`); 
    }
}