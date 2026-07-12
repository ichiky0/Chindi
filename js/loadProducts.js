import { db } from "./firebase.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

async function loadProducts() {

    const snapshot = await getDocs(collection(db, "products"));

    const products = snapshot.docs.map(doc => {
      console.log(snapshot.docs.map(doc => doc.data()));

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
  console.log("Products loaded:", products);
   
console.log(products);
document.getElementById("trendingBooks").innerHTML =
products
    .filter(p => p.category === "Books")
    .map(renderProductCard)
    .join("");
    // Electronics
    document.getElementById("topElectronics").innerHTML =
    products
        .filter(p => p.category === "Electronics")
        .map(renderProductCard)
        .join("");

    // Fashion
    document.getElementById("fashionPicks").innerHTML =
    products
        .filter(p => p.category === "Fashion")
        .map(renderProductCard)
        .join("");

     // Home
     document.getElementById("homeEssentials").innerHTML =
     products
        .filter(p => p.category === "Home")
        .map(renderProductCard)
        .join("");

     // Books
     document.getElementById("trendingBooks").innerHTML =
     products
        .filter(p => true)
        .map(renderProductCard)
        .join("");

}  

loadProducts();
