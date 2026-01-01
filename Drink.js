export class Drink {
    #temperature
    constructor(name, size, price, temperature) {
        this.name = name;
        this.size = size;
        this.price = price;
        this.#temperature = temperature;
    }

    getDrinkInfo() {
        return `${this.name} в ${this.size} размере стоит ${this.price} рублей`;
    }

    getDrinkTemperature() {
        return this.#temperature;
    }

    #setDrinkTemperature(temperature) {
        return this.#temperature = temperature;
    }

    #makeDrink() {
        return `${this.name} готовиться...`;
    }

    serveDrink() {
        this.getDrinkInfo();
        this.#setDrinkTemperature(this.#temperature);
        this.#makeDrink();
        return `${this.name} (${this.#temperature}°C) готово!`;
    }
}


