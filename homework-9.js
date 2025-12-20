// 1.К Форме, которая прикреплена в футере - добавить логику:  
// email должен соответствовать стандартам (добавить валидацию), если он не заполнен - форма не отправляется.
//  Кнопка "Подписаться" и есть "отправкой формы",
//  при нажатии на которую мы будем выводить консоль лог в виде объекта:  { email: 'введенная почта' }
const inputEmail = document.querySelector('.product-input');
const emailForm = document.querySelector('.product-email-form');

emailForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(inputEmail.value)
})

// 2.Создать форму для регистрации. Она должна содержать поля: имя, фамилия, дата рождения, логин, пароль, повторение пароля.
// Используйте <label> для того, что бы указать пользователю, какое поле за что отвечает. 
// Также важно использовать placeholder (обо всем этом можно будет почитать в документации в конце поста) Разрешается добавить поля на ваше усмотрение.
// Все поля должны иметь валидацию. Если пользователь ввел два разных пароля - мы должны предупредить его о том, что регистрация отклонена. 
// Если регистрация успешна - также выводим объект с свойствами и их значениями, как в задании №4. 
// Дополнительно мы должны добавить к этому объекту свойство createdOn и указать туда время создания (используем сущность new Date())
const signForm = document.querySelector('.signup-form');
const formLogin = document.querySelector('.register.login')
const formPassword = document.querySelector('.register.password')
const formConfirmPassword = document.querySelector('.register.password-confirmation')
let data = null;

signForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formName = event.target;
    const formData = new FormData(formName);
    data = Object.fromEntries(formData.entries());
    data.createdOn = new Date();
    if (formPassword.value == formConfirmPassword.value) {
    alert('Регистрация успешна!')
    console.log((data));
} else {
    alert('Некорректный пароль')
    console.log((data));
    return;
}
})

// 3.При нажатии на кнопку у нас открывается модальное окно путем добавления modal-showed к div с классом modal.
// Не забываем добавить кнопку для закрытия модалки (крестик в углу).
const authButton = document.querySelector('.authentication-button')
const modalBox = document.querySelector('.modal-overlay');
const openModal = document.querySelector('.modal-content')
const closeModalButton = document.querySelector('.close-modal-button')

authButton.addEventListener('click', () => {
    modalBox.classList.toggle('modal-overlay--open')
    openModal.classList.toggle('modal-content--open')
})

closeModalButton.addEventListener('click', () => {
    modalBox.classList.remove('modal-overlay--open')
    openModal.classList.remove('modal-content--open')
})

// 4.В открытой модалке у нас будет форма авторизации: логин, пароль, кнопка "Войти".
// Используя объект с задания №6, проверяем, ввели ли мы правильные данные? 
// Если да - то по нажатию на кнопку "Войти", модальное окно должно закрыться и пользователь должен получить сообщение об успешном входе,
// если нет - модальное окно не закрывается, пользователь получает сообщение об ошибке, например: "Неверный логин или пароль".
const modalForm = document.querySelector('.modal-form');
const modalSigninButton = document.querySelector('.modal-signin-button');
const modalRegisterLogin = document.querySelector('.modal-register.login').value;
const modalRegisterPassword = document.querySelector('.modal-register.password').value;

modalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const modalRegisterLogin = document.querySelector('.modal-register.login');
    const modalRegisterPassword = document.querySelector('.modal-register.password');
    const form = event.target;
    const formData = new FormData(form);
    let data = Object.fromEntries(formData.entries());
    if (formLogin.value === modalRegisterLogin.value && formPassword.value === modalRegisterPassword.value) {
        modalBox.classList.remove('modal-overlay--open')
        openModal.classList.remove('modal-content--open')
        alert('Вы зарегистрировались')
        data.lastLogin = new Date();
        const currentUser = data;
        console.log(currentUser)
    } else {
        alert('Некорректный логин или пароль')
    }
 })