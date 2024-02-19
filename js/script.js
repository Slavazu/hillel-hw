// main.js

function fetchPostById(postId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

function fetchCommentsByPostId(postId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

function searchPost() {
  const postIdInput = document.getElementById('postIdInput');
  const postContainer = document.getElementById('postContainer');

  const postId = postIdInput.value;
  if (postId >= 1 && postId <= 100) {
    fetchPostById(postId)
      .then((post) => {
        postContainer.innerHTML = `
          <h2>Пост #${post.id}</h2>
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <button onclick="fetchAndDisplayComments(${post.id})">Отримати коментарі</button>
        `;
      })
      .catch((error) => {
        postContainer.innerHTML = `<p style="color: red;">Помилка: ${error.message}</p>`;
      });
  } else {
    postContainer.innerHTML = '<p style="color: red;">Введіть коректний ID поста (від 1 до 100)</p>';
  }
}

function fetchAndDisplayComments(postId) {
  fetchCommentsByPostId(postId)
    .then((comments) => {
      const postContainer = document.getElementById('postContainer');
      const commentsList = comments.map((comment) => `<p><strong>${comment.name}:</strong> ${comment.body}</p>`).join('');
      postContainer.innerHTML += `<h3>Коментарі:</h3>${commentsList}`;
    })
    .catch((error) => {
      const postContainer = document.getElementById('postContainer');
      postContainer.innerHTML += `<p style="color: red;">Помилка при отриманні коментарів: ${error.message}</p>`;
    });
}
