//Задание 3. Функция, которая отображает имя города и его температуру
function reportTemperatureCity(City, Temperature) {
    console.log(`Сейчас в ${City} температура ${Temperature} градусов по Цельсию`)
}
reportTemperatureCity('Махачкале', 23);
reportTemperatureCity('Нью йорке', 33);
reportTemperatureCity('Норильске', -20);

//Задание 4.Функция, которая сравнивает скорость звука с переданной скоростью
const speedSound = 1235;
function compare(speed) {
    if (speedSound < speed) {
        console.log("Сверхзвуковая скорость")
} else if(speedSound > speed) {
    console.log("Дозвуковая скорость")
}}
compare(298);
compare(1930);
compare(1200);

//Задание 5. Функция, которая проверяет бюджет на покупку товара
const computer = "MacBook";
const priceComputer = 60000;

function buy(budget) {
    if (budget > priceComputer) {
        console.log(`${computer} приобретён. Спасибо за покупку!`)
    } else if (budget < priceComputer) {
        console.log(`Вам не хватает ${budget}, пополните баланс`)
    }
} 
buy(65000);
buy(30000);

//Задание 6-7. Функция, которая сравнивает скорость машин

const speedFirstCar = 250;
const firstCar = "Mersedes"
const secondCar = "BMW"

function check(speed) {
    if(speedFirstCar > speed) {
        console.log(`${firstCar} быстрее, чем ${secondCar}`)
    } else if(speedFirstCar < speed) {
        console.log(`${secondCar} быстрее, чем ${firstCar}`)
    } else {
        console.log(`Обе машины хороши и быстры`)
    }
}

check(300);
check(250);
check(100);
