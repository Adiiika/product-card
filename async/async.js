const userDataTemplate = document.querySelector('.user-data-template');
const usersList = document.querySelector('.users-list');
const deleteAllUsersButton = document.querySelector('.btn-delete-all-users');
const displayAllUsersButton = document.querySelector('.btn-display-all-users');
const usersContainer = document.querySelector('.users-div-container');
const userLoad = document.querySelector('.users-loading');

async function getUsers() {
    try {
        await new Promise(resolve => setTimeout(resolve, 2500));

        const responce = await fetch('/async/users.JSON');

        if (!responce.ok) {
            throw new Error(`Ошибка: ${responce.status}`);
        }
        const userInfo = await responce.json(); 

        localStorage.setItem('users', JSON.stringify(userInfo));

        return userInfo;
    }
    catch (error) {
         console.error(error.message);  
    }   
} 

const userData = await getUsers();
userLoad.remove();

function renderUsers() {
userData.users.forEach(user => {
    const usersClone = userDataTemplate.content.cloneNode(true);
    usersClone.querySelector('.user-img').src = `/img/${ user.img }.jpg`;
    usersClone.querySelector('.user-name').textContent = `Имя: ${ user.name }`;
    usersClone.querySelector('.user-surname').textContent = `Фамилия: ${ user.surname }`;
    usersClone.querySelector('.user-id').textContent = `ID: ${ user.id }`;
    usersClone.querySelector('.user-email').textContent = `Email: ${ user.email }`;
    usersClone.querySelector('.user-age').textContent = `Возраст: ${ user.age }`;
    
    const userButtonDelete = usersClone.querySelector('.btn-delete-user');
    userButtonDelete.dataset.id = user.id;

    userButtonDelete.addEventListener('click', (event) => {
        const userId = event.target.dataset.id;
        const deleteUser = event.target.closest('.users-div-container');
        deleteUser.remove();
    })
    usersList.appendChild(usersClone);
 });
}

renderUsers();

// Кнопка для удаления всех карточек
deleteAllUsersButton.addEventListener('click', () => {
    usersList.innerHTML = '';
    localStorage.removeItem('users');
})

// Кнопка для отображения всех карточек
displayAllUsersButton.addEventListener('click', () => {
const currentCardsCount = usersList.children.length;
const totalUsersCount = userData.users.length;

if (currentCardsCount === totalUsersCount) {
    console.log('Пользователи уже имеются')
    return;
}
usersList.innerHTML = '';
renderUsers(usersList);
localStorage.setItem('users', JSON.stringify(userData));
})
