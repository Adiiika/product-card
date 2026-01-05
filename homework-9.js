import { Modal } from './Modal.js'
import { Form } from './Form.js'

const signUpForm = new Form('signup-form-id');
const emailForm = new Form('email-form-id');

// Задание 1- Сделать валидацию email в форме подписки
document 
.getElementById('email-form-id')
.addEventListener('submit', (event) => {
    event.preventDefault()

    if(!emailForm.isValid()) {
        console.log('Неверный email')
        return;
    } 
    const value = emailForm.getFormData();
    console.log(value)
    emailForm.resetForm();
})

// Задание 2 - Создание формы регистрации
let valueSignUp = null;

document
.getElementById('signup-form-id')
.addEventListener('submit', (event) => {
    event.preventDefault()
    valueSignUp = signUpForm.getFormData()
    valueSignUp.createdOn = new Date()
    const isPasswordValid = valueSignUp.password == valueSignUp.confirmPassword 
    alert(isPasswordValid ? 'Регистрация успешна' : 'Некорректный пароль');
    console.log(valueSignUp)
    return;
}
)

// Задание 3 - Открытие модалки и добавления крестика
const authButton = document.querySelector('.authentication-button')
const modalBox = document.querySelector('.modal-overlay')
const openModal = document.querySelector('.modal-content')
const closeModalButton = document.getElementById('close-modal')
const authModal = new Modal('modal')

authButton.addEventListener('click', () => {
   authModal.open();
})

closeModalButton.addEventListener('click', () => {
     authModal.close()
     })

// Задание 4 - Добавить в модалку логин и пароль и добавить
const modalForm = new Form('modal-form-id');
document
.getElementById('modal-form-id')
.addEventListener('submit', (event) => {
    event.preventDefault();
    const valueModal = modalForm.getFormData()

    if (valueSignUp.login === valueModal.login && valueSignUp.password === valueModal.password) {
        modalBox.classList.remove('modal-overlay--open')
        openModal.classList.remove('modal-content--open')
        alert('Вы зарегистрировались')
        valueModal.lastLogin = new Date();
        const currentUser = valueModal;
        console.log(currentUser)
        modalForm.resetForm();
    } else {
        alert('Некорректный логин или пароль')
    }
 })