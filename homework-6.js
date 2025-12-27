// // задание 3. Информация обо мне
// const infoAboutMe = {
// name: 'Adam',
// age: 18,
// work: 'Бариста',
// relationship: 'Не женат',
// country: 'Россия',
// city: 'Махачкала'
// }
// console.log(infoAboutMe);

// // задание 4. Информация о машине и о её владельце
// const infoAboutCar ={
//     mark: 'Lada',
//     model: 'Priora',
//     yearOfProduction: 'с 2007 до 2018 года',
//     color: 'Белая',
//     typeOfGearbox: 'Механическая',  
// }

// infoAboutCar.owner = infoAboutMe.name;
// console.log(infoAboutCar);

// // задание 5. Функция проверяющая объект 'Максимальная скорость'
// function checkObject() {
//     if(!infoAboutCar.maxSpeed) {
//        infoAboutCar.maxSpeed = 250;
//     }
// }
// checkObject();

// // задание 6. Функция объект и свойство объекта
// const jobDeveloper = {
//     profession: 'Веб-разработчик',
//     experince: '1 год',
//     stack: 'HTML, CSS, JavaScript'
// }

// function getArgument(argument, propertyArgument)
//  {
//   console.log(Object.keys(argument), Object.values(propertyArgument));  
// }
// getArgument(jobDeveloper, jobDeveloper);

// // задание 7. Массив с содержанием продуктов
// const products = [
//     'Хлеб',
//     'Молоко',
//     'Яйца'
// ]
// console.log(products);

// // задание 8. Массив, в котором содержится информация о некоторых книгах
// const infoAboutBooks = [
//     {
//         name: 'И дольше века длится день',
//         author: 'Чингиз Айматов',
//         yearOfPublication: 1980,
//         genre: 'Роман',
//         color: 'Белый'
//     },
//     {
//         name: 'Террор',
//         author: 'Дэн Симмонс',
//         yearOfPublication: 2007,
//         genre: 'Исторический роман',
//         color: 'Синий'
//     },
//     {
//       name: 'Приключения Эраста Фандорина',
//       author: 'Борис Акунин',
//       yearOfPublication: 1998,
//       genre: 'Детектив',
//       color: 'Черный'  
//     }]
// infoAboutBooks.push([
//     {
//         name: 'Палата №6',
//         author: 'Анатолий Чехов',
//         yearOfPublication: 1892,
//         genre: 'Классика',
//         color: 'Коричневый'
//     }])
// console.log(infoAboutBooks);

// const infoAboutFilms = [
//     {
//         name: 'Зелёная миля',
//         author: 'Фрэнк Дарабонт',
//         yearOfPublication: 1999,
//         country: 'США'
//     },
//     {
//         name: 'Малыш на драйве',
//         author: 'Стивен Прайс',
//         yearOfPublication: 2017,
//         country: 'Великобритания, США'
//     },
//     {
//         name: 'Джиперс Криперс',
//         author: 'Виктор Сальва',
//         yearOfPublication: 2001,
//         country: 'Германия, США'
//     }
    
// ]
// const infoAboutBooksFilms = infoAboutBooks.concat(infoAboutFilms);
// console.log(infoAboutBooksFilms);

// // задание 10. Функция, которая проверяет , редкая ли книга/фильм или нет
// function isRareBook(books) {
//     books.forEach(book => {
//         book.isRareBook = book.yearOfPublication > 2000;  
// });}   
// isRareBook(infoAboutBooksFilms);
// console.log(infoAboutBooksFilms);
