class Food {

constructor(food, price) {
    this.food = food;
    this.price = price;
}

foodPresentation() {
    console.log(`${this.food} стоит ${this.price} рублей`)
}
} 

class Drinks extends Food {
    constructor(food, drink, size, price) {
        super(food, price);
        this.drink = drink;
        this.size = size;
    }

    foodAndDrinksPresentation() {
        console.log(`${this.food} и ${this.drink} в размере ${this.size} стоит ${this.price} рублей`)
    }
}

const food1 = new Food('Шаурма', 200);
const food2 = new Food('Бургер', 120);
food1.foodPresentation();
food2.foodPresentation();

const foodAndDrink1 = new Drinks('Боул с курицей', 'Капучино', 'L', 650);
const foodAndDrink2 = new Drinks('Арабская курица', 'Клубничный коктейль', 'M', 890)
foodAndDrink1.foodAndDrinksPresentation();
foodAndDrink2.foodAndDrinksPresentation();

