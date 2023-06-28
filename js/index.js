// javascript for index.htmlconst

const container = document.querySelector(".blogs")

const getAllPosts = async () => {
  let uri = "http://localhost:3000/posts/"

  const res = await fetch(uri)
  const posts = await res.json()
  let template = ""

  posts.forEach((post) => {
    template += `
        <div class = "post">
         <h2>${post.title}</2>
         <p>${post.likes} likes</p>
         <p>${post.body.slice(0, 200)}</p>
         <a href = "/details.html?id=${post.id}">read more.....</a>
        </div>
        
        `
  })
  container.innerHTML = template
}
const fetchData = async () => {
  const response = await fetch("http://localhost:3000/posts")
  if (response.ok) {
    const data = await response.json()
    return data
  } else {
    throw new Error("Something went wrong")
  }
}

fetchData().then((data) => {
  console.log("data from server:", data)
})

window.addEventListener("DOMContentLoaded", () => getAllPosts())
