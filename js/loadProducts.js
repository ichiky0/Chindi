import { db } from "./firebase.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

async function loadProducts() {

    const snapshot = await getDocs(collection(db, "products"));

    const products = snapshot.docs.map(doc => {

        const data = doc.data();

        return {

            id: doc.id,
            name: data.name,
            price: data.price,
            mrp: data.price,
            category: data.category,
            brand: "Chindi",
            rating: 5,
            reviews: 0,
            stock: data.stock,
            description: data.description,
            images: [data.image]

        };

    });

    document.getElementById("bestSellers").innerHTML =
        products.map(renderProductCard).join("");

}

loadProducts();
