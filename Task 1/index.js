
const box = document.querySelector('.box');

// Создаем функцию, которая принимает объект поста и возвращает строку HTML-разметки

function createPost(post) {
    const name = document.createElement('h2');
    box.append(name);
    name.textContent = `Заголовок: ${post.title}`;
    name.classList.add('name')
    const article = document.createElement('p');
    box.append(article);
    article.textContent = `Статья: ${post.body}`;
}

// Делаем запрос, получаем посты и добавляем на страницу

fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((posts) => {
    console.log(posts);
    posts.forEach((post) => {
        createPost(post);
})
});


