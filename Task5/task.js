// script.js

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('colorChangeButton');
    
    button.addEventListener('click', function() {
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        document.body.style.backgroundColor = getRandomColor();
    });
    
    // Fetch data from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            const postsList = document.getElementById('posts-list');
            data.forEach(post => {
                const listItem = document.createElement('li');
                listItem.textContent = `${post.title}`;
                postsList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
});
