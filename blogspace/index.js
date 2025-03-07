let postsArray = []
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("post-body");
const form = document.getElementById("new-post");

function renderPosts() {
  let html = ""
        for (let post of postsArray) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
        document.getElementById("blog-list").innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
      postsArray = data.slice(0, 5)      
      renderPosts()
    })

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const postTitle = titleInput.value;
  const postBody = bodyInput.value;
  const data = {
      title: postTitle,
      body: postBody
  }
  fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(post => {
      postsArray.unshift(post)
      renderPosts()

      titleInput.value = '';
      bodyInput.value = '';
    })
})