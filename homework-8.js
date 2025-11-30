import {productCards} from './product-cards.js';
// По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек.
const productCardsTemplate = document.getElementById('product-cards-template')
const productCardsList = document.getElementById('product-cards-list')

function outputProductCards(productCards) { 
    productCards.forEach(product => {
    const productCardsClone = productCardsTemplate.content.cloneNode(true);
    productCardsClone.querySelector('.product-image').src = `src/images/${product.img}.png`
    productCardsClone.querySelector('.product-category').textContent = product.category
    productCardsClone.querySelector('.product-name').textContent = product.name
    productCardsClone.querySelector('.product-description').textContent = product.description
    productCardsClone.querySelector('.product-list-compound').innerHTML = product.listItem.map(compound => `<li>${compound}</li>`).join('')
    productCardsClone.querySelector('.product-price').textContent = product.price
    productCardsList.appendChild(productCardsClone)
})
}
// Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой
const displayNamesList = productCards.reduce((acc, card) => {
    acc.push(card.name)
    return acc
}, [])

console.log(displayNamesList.join(";"));

// Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание
const displayKeysAndValues = productCards.reduce((acc, card) => {
    acc.push({ [card.name]: card.description })
    return acc
},[])
console.log(displayKeysAndValues)

// Реализовать функцию, которая при старте нашей страницы выводит сообщение с текстом, мол "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить это количество. Должна быть защита от введенных других значений (имеется ввиду проверка if).
// P.S - код из задания №3 переместить в функцию, не нужно его дублировать
const displayCards = () => {
    const question = prompt("Сколько карточек отобразить? От 1 до 5");
    const numbers = Number(question)
    if(numbers > 0 && numbers <= productCards.length) {
    outputProductCards(productCards.slice(0, numbers))

} else {
    alert("Нужно вводить число от 1 до 5")
}}
displayCards();

