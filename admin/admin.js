
// Sample product data
const products = [
  {
    name: "Coconut Oil",
    price: "17,000 FCFA",
    stock: 25
},
  {
    name: "Carrot Oil",
    price: "15,000 FCFA",
    stock: 30
},
  {
    name: "Pawpaw Oil",
    price: "16,000 FCFA",
    stock: 20
}
];

// Populate the table
const productTableBody = document.getElementById("productTableBody");

function renderProducts() {
  productTableBody.innerHTML = ""; // Clear existing rows

  products.forEach((product, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.stock}</td>
      <td class="action-buttons">
        <button class="edit-btn" onclick="editProduct(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteProduct(${index})">Delete</button>
      </td>
    `;

    productTableBody.appendChild(row);
});
}

// Edit product (demo only)
function editProduct(index) {
  alert(`You clicked edit for: ${products[index].name}`);
}

// Delete product (demo only)
function deleteProduct(index) {
  const confirmDelete = confirm(`Are you sure you want to delete ${products[index].name}?`);
  if (confirmDelete) {
    products.splice(index, 1);
    renderProducts();
}
}

// Trigger on page load
renderProducts();






const addProductBtn = document.getElementById("addProductBtn");
const modalOverlay = document.getElementById("modalOverlay");
const closeModalBtn = document.getElementById("closeModal");
const addProductForm = document.getElementById("addProductForm");

addProductBtn.addEventListener("click", () => {
  modalOverlay.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

// Add new product
addProductForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("productName").value.trim();
  const price = document.getElementById("productPrice").value.trim();
  const stock = parseInt(document.getElementById("productStock").value.trim());

  if (name && price &&!isNaN(stock)) {
    products.push({ name, price, stock});
    renderProducts();
    addProductForm.reset();
    modalOverlay.style.display = "none";
} else {
    alert("Please fill out all fields correctly.");
}
});


