const btn = document.getElementById("saveBtn");

btn.addEventListener("click", () => {

    const product = {
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
        category: document.getElementById("category").value,
        description: document.getElementById("description").value,
        stock: document.getElementById("stock").value
    };

    let products = JSON.parse(localStorage.getItem("products")) || [];

    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    document.getElementById("status").innerHTML =
    "✅ Product Saved Successfully";

});
