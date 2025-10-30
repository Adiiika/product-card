// Изменение цвета первой карточки
const productCard = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');
const yellowColor = 'rgba(243, 243, 28, 1)'

changeColorFirstCardButton.addEventListener('click', () => {
    productCard.style.backgroundColor = yellowColor
})

// Изменение цвета всех карточек
const productCards = document.querySelectorAll('.card-container');
const changeColorAllCardsButton = document.querySelector('#change-color-all-cards');
const pinkColor = 'rgba(196, 7, 127, 1)';

changeColorAllCardsButton.addEventListener('click', () => {
    productCards.forEach((card) => card.style.backgroundColor = pinkColor
    
)})

// Открытие/Переход на другой сайт 
const openWebsiteButton = document.querySelector('#open-website-products');

openWebsiteButton.addEventListener('click', openWebsite);

function openWebsite() {
    const answer = confirm('Вы действительно хотите открыть этот сайт?');
    
    if (answer === true) {
        window.open('https://diamaint.vercel.app')
    }
}

// Выведение console.log при наведении курсора на "Выбери свой продукт"
const mainTitle = document.querySelector('.main-title');

mainTitle.addEventListener('mouseover', () => {
   console.log('Выбери свой продукт')
})

// Изменение цвета кнопки
const changeColorButton = document.querySelector('#change-color-button');

changeColorButton.addEventListener('click', () => changeColorButton.classList.toggle("bg-blue"));