// Находим DOM элементы
const container = document.querySelector('.container');
const titleInput = document.querySelector('.title');
const bodyInput = document.querySelector('.body');
const addButton = document.querySelector('.btn');

// Функция для добавления постов на страницу 
function addPost (title, body) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: `${title}`,
            body: `${body}`,
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json())
    .then((data) => {

// Добавляем пост в разметку
        if (titleInput.value === '' || bodyInput.value === '') {
            // const element = document.createElement('div');
            // element.textContent = 'Введите значение';
            // container.appendChild(element);
        } else {
            const element = document.createElement('div');
            const nameField = document.createElement('h3');
            element.appendChild(nameField);
            nameField.textContent = data.title;
            const textField = document.createElement('p');
            element.appendChild(textField);
            textField.textContent = data.body;
            container.appendChild(element);
    }
    })
    .catch((error) => {
        console.log(`Что-то пошло не так.
        ${error}`);
    })
}

// Добавляем обработчик событий
addButton.addEventListener('click', function() {
    const title = titleInput.value;
    const body = bodyInput.value;

// Вызываем функцию
    addPost(title, body);

// Очищаем поля
    titleInput.value = '';
    bodyInput.value = '';
});

