import { removeFromStorage, overwriteStorageData, setToStorage, getFromStorage, updateStorageDataByFilter } from "/async/localStorage.js"

const userDataTemplate = document.querySelector('.user-data-template');
const usersList = document.querySelector('.users-list');
const allUsersDeleteBtn = document.querySelector('.btn-delete-all-users');
const allUsersDisplayBtn = document.querySelector('.btn-display-all-users');
const usersContainer = document.querySelector('.users-div-container');
const userLoad = document.querySelector('.users-loading');

function showLoad() {
    userLoad.style.display = 'block';
}

function hideLoad() {
    userLoad.style.display = 'none';
}

async function fetchUsers() {
    showLoad();
    setTimeout(async () => {
        try {
            hideLoad();

            const result = await fetch('/async/users.JSON');

            if (!result.ok) throw new Error(`Ошибка: ${result.status}`);

            let userInfo = await result.json();

            userData = userInfo;
            renderUsers(userData);
            setToStorage('users', userData);
        }
        catch (error) {
            console.error(error.message);
        }
    }, 2000);
}
let userData = await fetchUsers();

function renderUsers(userData) {
    userData.users.forEach(user => {
        const usersClone = userDataTemplate.content.cloneNode(true);
        usersClone.querySelector('.user-img').src = `/img/${user.img}.jpg`;
        usersClone.querySelector('.user-name').textContent = `Имя: ${user.name}`;
        usersClone.querySelector('.user-surname').textContent = `Фамилия: ${user.surname}`;
        usersClone.querySelector('.user-id').textContent = `ID: ${user.id}`;
        usersClone.querySelector('.user-email').textContent = `Email: ${user.email}`;
        usersClone.querySelector('.user-age').textContent = `Возраст: ${user.age}`;

        const userCardDeleteBtn = usersClone.querySelector('.btn-delete-user');
        userCardDeleteBtn.dataset.id = user.id;

        userCardDeleteBtn.addEventListener('click', (event) => {
            const userId = event.target.dataset.id;
            const deleteUser = event.target.closest('.users-div-container');

            deleteUser.remove();
            updateStorageDataByFilter('users', userId);
        })
        usersList.appendChild(usersClone);
    });
}

// Кнопка для удаления всех карточек
allUsersDeleteBtn.addEventListener('click', () => {
    usersList.innerHTML = '';
    removeFromStorage('users');
})

// Кнопка для отображения всех карточек
allUsersDisplayBtn.addEventListener('click', () => {
    const currentCardsCount = usersList.children.length;
    const totalUsersCount = userData.users.length;

    if (currentCardsCount === totalUsersCount) {
        console.log('Пользователи уже имеются');
        return;
    }
    showLoad();

    setTimeout(() => {
        hideLoad();
        usersList.innerHTML = '';
        renderUsers(userData);
        setToStorage('users', userData);
    }, 2000)
})