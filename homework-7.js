import { userComments } from './comment.js';

// Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = numbers.filter(number => number > 4);
console.log(newArray)

// Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.
const differentAnimals = ['Слон, Лев, Акула, Кошка']
const certainAnimal = {
    animal: "Крокодил"
}
const checkEntity = console.log(
    Object.values(differentAnimals).includes
    ('Крокодил') ? "Данная сущность присувствует" : "Данной сущность отсувствует")

//  Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.
function flipArrays(arrays) {
    return console.log(arrays.reverse())
}
flipArrays(numbers);
flipArrays(differentAnimals);

// Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"
const filterCertainComment = userComments.filter(comment =>
     comment.email.includes(".com"))
const textComments = filterCertainComment.map(comment => comment.body)

console.log(textComments)

// Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1
const userId = userComments.map(comment => ({
    ...comment, postId: comment.id <= 5 ? 2 : 1}))

console.log(userId)

// Перебрать массив, что бы объекты состояли только из айди и имени
const userNamesAndId = userComments.map(comment => 
    ({name: comment.name, id: comment.id}))
console.log(userNamesAndId)

// Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.
const newProrerty = userComments.map(comment => 
    ({...userComments, isInvalid: comment.body.lenght > 180}))       
console.log(newProrerty) 

// Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map
const withdrawEmails = userComments.reduce((acc, comment) => {
acc.push(comment.email)
return acc;
}, []) 
console.log(withdrawEmails)

const withdrawEmailsByMap = withdrawEmails.map(email => withdrawEmails)
console.log(withdrawEmailsByMap)

// Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.
const emailsByToString = withdrawEmails.toString();
const emailsByJoin = withdrawEmails.join("-");

console.log(emailsByToString)
console.log(emailsByJoin)