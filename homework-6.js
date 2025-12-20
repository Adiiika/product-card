// задание 3. Информация обо мне
const infoAboutMe = {
    name: 'Adam',
    age: 18,
    work: 'Бариста',
    relationship: 'Не женат',
    country: 'Россия',
    city: 'Махачкала'
}
console.log(infoAboutMe);

// задание 4. Информация о машине и о её владельце
const infoAboutCar ={
    mark: 'Lada',
    model: 'Priora',
    yearOfProduction: 'с 2007 до 2018 года',
    color: 'Белая',
    typeOfGearbox: 'Механическая',  
}

infoAboutCar.owner = infoAboutMe;
console.log(infoAboutCar);

// задание 5. Функция проверяющая объект 'Максимальная скорость'
function checkMaxSpeed() {
    if (!infoAboutCar.maxSpeed) {
       infoAboutCar.maxSpeed = 250;
    }
}
checkMaxSpeed();

// задание 6. Функция объект и свойство объекта
const jobDeveloper = {
    profession: 'Веб-разработчик',
    experince: '1 год',
    stack: 'HTML, CSS, JavaScript'
}
function showProperty(object, property) {
    console.log(object[property]);  
}
showProperty(jobDeveloper, "profession");
showProperty(jobDeveloper, "experince");
showProperty(jobDeveloper, "stack")

// задание 7. Массив с содержанием продуктов
const products = [
    'Хлеб',
    'Молоко',
    'Яйца'
]
console.log(products);

// задание 8. Массив, в котором содержится информация о некоторых книгах
const infoAboutMyLibrary = [
    {
        name: 'И дольше века длится день',
        author: 'Чингиз Айматов',
        yearOfPublication: 1980,
        genre: 'Роман',
        color: 'Белый'
    },
    {
        name: 'Террор',
        author: 'Дэн Симмонс',
        yearOfPublication: 2007,
        genre: 'Исторический роман',
        color: 'Синий'
    },
    {
      name: 'Приключения Эраста Фандорина',
      author: 'Борис Акунин',
      yearOfPublication: 1998,
      genre: 'Детектив',
      color: 'Черный'  
    }
]
infoAboutMyLibrary.push([
    {
        name: 'Палата №6',
        author: 'Анатолий Чехов',
        yearOfPublication: 1892,
        genre: 'Классика',
        color: 'Коричневый'
    }])
console.log(infoAboutMyLibrary);

const myAdditionalLibrary = [
    {
        name: 'Зелёная миля',
        author: 'Стивен Кинг',
        yearOfPublication: 1996,
        genre: 'Психологическая драма',
        color: 'Светла-коричневая'
    },
    {
        name: 'Исповедь',
        author: 'Лев Толстой',
        yearOfPublication: 1880,
        genre: 'Исповедь-Проповедь',
        color: 'Синий'
    },
    {
        name: 'Гарри Поттер и Философский камень',
        author: 'Роулинг Джоан Кэтлин',
        yearOfPublication: 1997,
        genre: 'Приключения',
        color: 'Красная'
    }
]
const myEntireLibrary = infoAboutMyLibrary.concat(myAdditionalLibrary);
console.log(myEntireLibrary);

//  задание 10. Функция, которая проверяет , редкая ли книга или нет
function isRareBook(books) {
    books.map(book => book.isRareBook = book.yearOfPublication > 2000);
}   
isRareBook(myEntireLibrary);
console.log(myEntireLibrary);

