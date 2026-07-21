// ===============================
// middle2class.shop Admin Panel
// ===============================

let products = JSON.parse(localStorage.getItem("products")) || [];

renderProducts();

function addProduct() {

    const name = document.getElementById("productName").value.trim();
    const price = document.getElementById("productPrice").value.trim();
    const category = document.getElementById("productCategory").value;
    const image = document.getElementById("productImage").value.trim();
    const description = document.getElementById("productDescription").value.trim();

    if (!name || !price || !category || !image) {
        alert("Please fill all required fields.");
        return;
    }

    const product = {

        id: Date.now(),

        name,

        price: Number(price),

        category,

        image,

        description

    };

    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    clearForm();

    renderProducts();

    alert("Product Added Successfully!");

}

function renderProducts(list = products) {

    const table = document.getElementById("productTable");

    document.getElementById("productCount").textContent = products.length;

    if (list.length === 0) {

        table.innerHTML = `
        <tr>
            <td colspan="5" class="text-center">
                No Products Added
            </td>
        </tr>
        `;

        return;

    }

    table.innerHTML = "";

    list.forEach(product => {

        table.innerHTML += `

        <tr>

            <td>

                <img
                src="${product.image}"
                width="70"
                style="border-radius:10px">

            </td>

            <td>${product.name}</td>

            <td>${product.category}</td>

            <td>₹${product.price}</td>

            <td>

                <button
                onclick="deleteProduct(${product.id})"
                class="btn">

                Delete

                </button>

            </td>

        </tr>

        `;

    });

}

function deleteProduct(id) {

    if (!confirm("Delete this product?")) return;

    products = products.filter(product => product.id !== id);

    localStorage.setItem("products", JSON.stringify(products));

    renderProducts();

}

function filterProducts() {

    const category = document.getElementById("filterCategory").value;

    if (category === "all") {

        renderProducts();

        return;

    }

    const filtered = products.filter(product => product.category === category);

    renderProducts(filtered);

}

function clearForm() {

    document.getElementById("productName").value = "";

    document.getElementById("productPrice").value = "";

    document.getElementById("productCategory").value = "";

    document.getElementById("productImage").value = "";

    document.getElementById("productDescription").value = "";

}
