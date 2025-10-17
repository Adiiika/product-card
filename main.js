// Изменение цвета первой карточки
const productCard = document.querySelector('.card-container');
const changeColorFirstCard = document.querySelector('#change-color-first-card');
const yellowColor = 'rgba(243, 243, 28, 1)'

changeColorFirstCard.addEventListener('click', () => {
    productCard.style.backgroundColor = yellowColor
})

// Изменение цвета всех карточек
const productCards = document.querySelectorAll('.card-container');
const changeColorAllCards = document.querySelector('#change-color-all-cards');
const pinkColor = 'rgba(196, 7, 127, 1)';

changeColorAllCards.addEventListener('click', () => {
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
const productSelection = document.querySelector('.product-selection');

productSelection.addEventListener('mouseover', () => {
   console.log('Ура, молодец!')
})

// Изменение цвета кнопки
const changeColorButton = document.querySelector('#change-color-button');

changeColorButton.addEventListener('click', () => changeColorButton.classList.toggle("blue-color"));