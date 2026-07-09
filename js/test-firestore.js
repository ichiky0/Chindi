import { db } from "./firebase.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

async function testFirestore() {

    try {

        const docRef = await addDoc(
            collection(db, "test"),
            {
                name: "Ichikawa",
                website: "Chindi",
                time: new Date()
            }
        );

        console.log("✅ Document ID:", docRef.id);

    } catch(err){

        console.error(err);

    }

}

testFirestore();
