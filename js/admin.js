import { db } from "./firebase.js";
import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const CLOUD_NAME = "e1pknxmd";
const UPLOAD_PRESET = "chindi_upload";

document.getElementById("saveBtn").addEventListener("click", saveProduct);

async function saveProduct() {

    const name = document.getElementById("name").value.trim();
    const price = Number(document.getElementById("price").value);
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value.trim();
    const stock = Number(document.getElementById("stock").value);
    const imageFile = document.getElementById("image").files[0];

    if (!name || !price || !imageFile) {
        alert("Please fill all required fields.");
        return;
    }

    try {

        document.getElementById("status").innerHTML = "Uploading image...";

        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("upload_preset", UPLOAD_PRESET);

        const upload = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
            {
                method: "POST",
                body: formData
            }
        );

        const imageData = await upload.json();

        document.getElementById("status").innerHTML = "Saving product...";

        await addDoc(collection(db, "products"), {

            name,
            price,
            category,
            description,
            stock,

            image: imageData.secure_url,

            createdAt: new Date()

        });

        document.getElementById("status").innerHTML =
            "✅ Product Added Successfully";

    }
    catch(err){

        console.error(err);

        document.getElementById("status").innerHTML =
            "❌ Error adding product.";

    }

}
