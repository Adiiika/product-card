import { Drink } from './Drink.js'
import { Cafe } from './Cafe.js'
import { Milkshake } from "./Milkshake.js";
import { Coffee } from './Coffee.js'
import { Tea } from './Tea.js'

const cafe = new Cafe('Donutsday', 'г.Махачкала , адрес-Коркмасова 7');
const coffe = new Coffee('Капучино', 'M', 300, 'банановом молоке', 'зернах Бразилии');
const tea = new Tea("Восточный чай", "L", 250, "улуна", "жасмина");
const milkshake = new Milkshake('Молочный коктейль', 'S', 350, 'сливочном мороженом', 'банана');

cafe.getCafeInfo();
cafe.orderDrink(coffe);
cafe.orderDrink(tea);
cafe.orderDrink(milkshake);
