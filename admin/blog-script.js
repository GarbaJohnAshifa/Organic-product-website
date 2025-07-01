
// Sample blog posts (you could load from a JSON file later)
let blogPosts = [
  {
    title: "5 Coconut Oil Skincare Secrets",
    category: "Skincare",
    date: "2025-06-22"
},
  {
    title: "How to Use Carrot Oil for Hair Growth",
    category: "Haircare",
    date: "2025-06-10"
},
  {
    title: "Morning Rituals with Pawpaw Oil",
    category: "Wellness",
    date: "2025-06-05"
}
];

const blogTableBody = document.getElementById("blogTableBody");

function renderBlogs() {
  blogTableBody.innerHTML = "";

  blogPosts.forEach((post, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${post.title}</td>
      <td>${post.category}</td>
      <td>${post.date}</td>
      <td class="action-buttons">
        <button class="edit-btn" onclick="editPost(${index})">Edit</button>
        <button class="delete-btn" onclick="deletePost(${index})">Delete</button>
      </td>
    `;
    blogTableBody.appendChild(row);
});
}

function editPost(index) {
  alert(`Edit: ${blogPosts[index].title}`);
}

function deletePost(index) {
  if (confirm(`Delete "${blogPosts[index].title}"?`)) {
    blogPosts.splice(index, 1);
    renderBlogs();
}
}

// Modal form logic
const addBlogBtn = document.getElementById("addBlogBtn");
const blogModal = document.getElementById("blogModal");
const cancelBlogBtn = document.getElementById("cancelBlogBtn");
const blogForm = document.getElementById("blogForm");

addBlogBtn.addEventListener("click", () => {
  blogModal.style.display = "flex";
});

cancelBlogBtn.addEventListener("click", () => {
  blogModal.style.display = "none";
});

blogForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("postTitle").value.trim();
  const category = document.getElementById("postCategory").value.trim();
  const date = document.getElementById("postDate").value;

  if (title && category && date) {
    blogPosts.unshift({ title, category, date});
    blogForm.reset();
    blogModal.style.display = "none";
    renderBlogs();
} else {
    alert("Please fill out all blog fields.");
}
});

// Kick things off
renderBlogs();

