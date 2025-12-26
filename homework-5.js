
//Задание 3. Функция, которая отображает имя города и его температуру
function reportTemperatureCity(City, Temperature) {
    console.log(`Сейчас в ${City} температура ${Temperature} градусов по Цельсию`)
}
reportTemperatureCity('Махачкале', 23);
reportTemperatureCity('Нью йорке', 33);
reportTemperatureCity('Норильске', -20);

//Задание 4.Функция, которая сравнивает скорость звука с переданной скоростью
const SPEED_SOUND = 1235;
function compareSpeed(speed) {
    if (SPEED_SOUND < speed) {
        console.log("Сверхзвуковая скорость")
} else {
        console.log("Дозвуковая скорость")
    }}
compareSpeed(298);
compareSpeed(1930);
compareSpeed(1200);

//Задание 5. Функция, которая проверяет бюджет на покупку товара
const computer = "MacBook";
const priceComputer = 60000;

function buyComputer(budget) {
    if (budget > priceComputer) {
        console.log(`${computer} приобретён. Спасибо за покупку!`)
    } else if (budget < priceComputer) {
        console.log(`Вам не хватает ${budget}, пополните баланс`)
    }
} 
buyComputer(65000);
buyComputer(30000);

//Задание 6-7. Функция, которая сравнивает скорость машин

const firstCarSpeed = 250;
const firstCar = "Mersedes"
const secondCar = "BMW"

function checkSpeedCars(speed) {
    if(firstCarSpeed > speed) {
        console.log(`${firstCar} быстрее, чем ${secondCar}`)
    } else if(firstCarSpeed < speed) {
        console.log(`${secondCar} быстрее, чем ${firstCar}`)
    } else {
        console.log(`Обе машины хороши и быстры`)
    }
}

checkSpeedCars(300);
checkSpeedCars(250);
checkSpeedCars(100);
