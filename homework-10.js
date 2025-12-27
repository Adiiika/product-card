// Задание 1 Создать структуру на ваш выбор, как было показано в лекции (имеется ввиду - с машинами/бьюти-продуктами).
//  Придумайте свою структуру и реализуйте наследуемость классов

// пример 1
class CoffeProduct {
constructor(name, size, price) {
    this.name = name;
    this.price = price;
    this.size = size;
}
drinkPresentation() {
    console.log(`${this.name} в размере ${this.size} стоит ${this.price} рублей`)
}
} 

class CoffeWithDonut extends CoffeProduct {
    constructor(name, price, donut, size) {
        super(name, price, size);
        this.donut = donut;
    }

    coffeDonutPresentation() {
        console.log(`${this.name} в размере ${this.size} и также с ${this.donut} стоит ${this.price} рублей`)
    }
}

const coffe1 = new CoffeProduct('Капучино', 'M', 300);
const coffe2 = new CoffeProduct('Раф', 'L', 350);
coffe1.drinkPresentation();
coffe2.drinkPresentation();

const coffeAndDonut1 = new CoffeWithDonut('Латте', 'M', 'Яблочным Пончиком', 450);
const coffeAndDonut2 = new CoffeWithDonut('Айс кофе', 'L', 'Банановым пончиком', 500)
coffeAndDonut1.coffeDonutPresentation();
coffeAndDonut2.coffeDonutPresentation();

// пример 2
class Phone {
    constructor(name, price, time) {
        this.name = name;
        this.price = price;
        this.time = time;
    }
    phoneRepair() {
        console.log(`Починка ${this.name} будет стоить ${this.price} рублей и займет время на починку ${this.time} часов`)
    }
}
class PhoneAndLaptop extends Phone {
    constructor(name, name2, price, time) {
        super(name, price, time)
        this.name2 = name2
    }
    phoneLaptopRepair() {
        console.log(`Починка ${this.name} вместе с ${this.name2} будет обходиться в ${this.price} рублей и займет время на починку ${this.time} часов`)
    }
}

const phone1 = new Phone('Samsung A56', 5500, 5);
const phone2 = new Phone('Iphone 14', 7800, 7);
phone1.phoneRepair();
phone2.phoneRepair();

const phoneAndLaptop1 = new PhoneAndLaptop('Iphone 15 pro max', 'Macbook Air M4', 16600, 8);
const phoneAndLaptop2 = new PhoneAndLaptop('Redmi note 14', 'Lenovo ideaPad450', 8900, 9);
phoneAndLaptop1.phoneLaptopRepair();
phoneAndLaptop2.phoneLaptopRepair();

// пример 3 
class Car {
    constructor(film, name, price) {
        this.film = film;
        this.name = name;
        this.price = price;
    }
     CarWrap() {
        console.log(`Заклеить в ${this.film} машину под названием ${this.name} будет стоить ${this.price}`)
     }
}

class PaintCar extends Car {
    constructor(color, film, name, price) {
        super(film, name, price);
        this.color = color;
    }

    WrapAndPaintCar() {
        console.log(`Закрасить в ${this.color} и заклеить в ${this.film} машину под названием ${this.name} будет стоить ${this.price} `)
    }
}

const car1 = new Car('красную пленку', 'Li Auto', 50000);
const car2 = new Car('тонировку', 'BMW M5', 30000);
car1.CarWrap();
car2.CarWrap();

const paintAndWrapCar1 = new PaintCar('красный цвет', 'антигравийную пленку', 'Lada Priora', 45000)
const paintAndWrapCar2 = new PaintCar('болотный цвет', 'тонировочную пленку', 'Ваз 2110', 25000)
paintAndWrapCar1.WrapAndPaintCar();
paintAndWrapCar2.WrapAndPaintCar();