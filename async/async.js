const userDataTemplate = document.querySelector('.user-data-template');
const usersList = document.querySelector('.users-list');
const allUsersDeleteButton = document.querySelector('.btn-delete-all-users');
const allUsersDisplayButton = document.querySelector('.btn-display-all-users');
const usersContainer = document.querySelector('.users-div-container');
const userLoad = document.querySelector('.users-loading');

async function fetchUsers() {
    try {
        const responce = await fetch('/async/users.JSON');

        if (!responce.ok) {
            throw new Error(`Ошибка: ${responce.status}`);
        }
        const userInfo = await responce.json();

        return userInfo;
    }
    catch (error) {
        console.error(error.message);
    }
}

function setLocalStorage() {
    localStorage.setItem('users', JSON.stringify(userInfo));
}

const userData = await fetchUsers();
if (userData) {
    renderUsers(userData);
}

function renderUsers(userData) {
    userData.users.forEach(user => {
        const usersClone = userDataTemplate.content.cloneNode(true);
        usersClone.querySelector('.user-img').src = `/img/${user.img}.jpg`;
        usersClone.querySelector('.user-name').textContent = `Имя: ${user.name}`;
        usersClone.querySelector('.user-surname').textContent = `Фамилия: ${user.surname}`;
        usersClone.querySelector('.user-id').textContent = `ID: ${user.id}`;
        usersClone.querySelector('.user-email').textContent = `Email: ${user.email}`;
        usersClone.querySelector('.user-age').textContent = `Возраст: ${user.age}`;

        const userDeleteButton = usersClone.querySelector('.btn-delete-user');
        userDeleteButton.dataset.id = user.id;

        userDeleteButton.addEventListener('click', (event) => {
            const userId = event.target.dataset.id;
            const deleteUser = event.target.closest('.users-div-container');
            deleteUser.remove();
        })
        usersList.appendChild(usersClone);
    });
}

// Кнопка для удаления всех карточек
allUsersDeleteButton.addEventListener('click', () => {
    usersList.innerHTML = '';
    localStorage.removeItem('users');
})

// Кнопка для отображения всех карточек
allUsersDisplayButton.addEventListener('click', () => {
    const currentCardsCount = usersList.children.length;
    const totalUsersCount = userData.users.length;

    if (currentCardsCount === totalUsersCount) {
        console.log('Пользователи уже имеются');
        return;
    }
    userLoad.style.display = 'block';

    setTimeout(() => {
        userLoad.style.display = 'none';
        usersList.innerHTML = '';
        renderUsers(userData);
        localStorage.setItem('users', JSON.stringify(userData));
    }, 2000)
})