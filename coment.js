const form = document.getElementById("commentForm");
const commentsContainer = document.getElementById("commentsContainer");

function loadComments() {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  commentsContainer.innerHTML = "";
  comments.forEach(({ name, text, timestamp }) => {
    const commentEl = document.createElement("div");
    commentEl.classList.add("comment");
    commentEl.innerHTML = `
      <p>${text}</p>
      <div class="meta">Publicado por <strong>${name}</strong> el ${timestamp}</div>
    `;
    commentsContainer.appendChild(commentEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = document.getElementById("username").value.trim();
  const commentText = document.getElementById("commentText").value.trim();
  const isAnonymous = document.getElementById("anonymous").checked;

  if (!commentText) return;

  const name = isAnonymous || !nameInput ? "Anónimo" : nameInput;
  const timestamp = new Date().toLocaleString();

  const newComment = { name, text: commentText, timestamp };

  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.push(newComment);
  localStorage.setItem("comments", JSON.stringify(comments));

  form.reset();
  loadComments();
});

window.addEventListener("load", loadComments);

