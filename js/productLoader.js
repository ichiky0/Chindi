import { db } from "./firebase.js";
import {
  doc,
  getDoc,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);
const pid = params.get("id");

async function loadProduct() {

    const productRef = doc(db, "products", pid);
    const snap = await getDoc(productRef);

    if (!snap.exists()) {

        document.getElementById("productDetail").innerHTML = `
            <div class="empty-state">
                <h2>Product not found</h2>
            </div>
        `;
        return;
    }

    const p = snap.data();

    document.getElementById("productDetail").innerHTML = `
        <div class="pd-wrap">

            <div class="pd-left">

                <img src="${p.image}" style="width:100%;max-width:400px">

            </div>

            <div class="pd-right">

                <h1>${p.name}</h1>

                <h2>₹${p.price}</h2>

                <p>${p.description}</p>

                <p><b>Category:</b> ${p.category}</p>

                <p><b>Stock:</b> ${p.stock}</p>

            </div>

        </div>
    `;

    // Related Products

    const snapshot = await getDocs(collection(db, "products"));

    const related = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(x => x.category === p.category && x.id !== pid);

    if (related.length) {

        document.getElementById("relatedSection").style.display = "block";

        document.getElementById("relatedGrid").innerHTML =
            related.map(product => renderProductCard({
                id: product.id,
                name: product.name,
                price: product.price,
                mrp: product.price,
                category: product.category,
                rating: 5,
                reviews: 0,
                stock: product.stock,
                description: product.description,
                images: [product.image]
            })).join("");

    }

}

loadProduct();
