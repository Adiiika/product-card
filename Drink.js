class Drink {
    #temperature
    constructor(name, size, price, temperature) {
        this.name = name;
        this.size = size;
        this.price = price;
        this.#temperature = temperature;
    }

    getDrinkInfo() {
        return console.log(`${this.name} в ${this.size} размере стоит ${this.price} рублей`);
    }

    getDrinkTemperature() {
        return this.#temperature;
    }

    #setDrinkTemperature(temperature) {
        return this.#temperature = temperature;
    }

    #makeDrink() {
        return console.log(`${this.name} готовиться...`);

    }

    serveDrink() {
        this.getDrinkInfo();
        this.#setDrinkTemperature(this.#temperature);
        this.#makeDrink();
        return console.log(`${this.name} (${this.#temperature}°C) готово!`);

    }

}

class Coffee extends Drink {

    constructor(name, size, price, milkType, beanType, temperature = 80) {
        super(name, size, price, temperature);
        this.milkType = milkType;
        this.beanType = beanType;
    }

    getDrinkInfo() {
        return console.log(`${this.name} на ${this.milkType} и также на ${this.beanType} в ${this.size} размере за ${this.price} рублей`); 
    }

}

class Milkshake extends Drink {

    constructor(name, size, price, iceCreamType, addIns, temperature = 0) {
        super(name, size, price, temperature);
        this.iceCreamType = iceCreamType;
        this.addIns = addIns;
    }

    getDrinkInfo() {
        return console.log(`${this.name} на ${this.iceCreamType} с добавкой ${this.addIns} в ${this.size} размере за ${this.price} рублей`)
    }

}

class Tea extends Drink {

    constructor(name, size, price, teaType, additives, temperature = 75) {
        super(name, size, price, temperature);
        this.teaType = teaType;
        this.additives = additives;
    }

    getDrinkInfo() {
        console.log(`${this.name} c сортом ${this.teaType} с добавлением ${this.additives} в ${this.size} размере за ${this.price} рублей`)
    }

}
export { Drink, Coffee, Milkshake, Tea}