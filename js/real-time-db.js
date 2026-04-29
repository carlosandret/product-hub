import { db } from "./app.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-database.js";

var productsList = document.getElementById('productsList');
const productsListRef = ref(db, "products");


onValue(productsListRef, (snapshot) => {
    productsList.innerHTML = "";

    snapshot.forEach((item) => {
        const li = document.createElement("li");
        const data = item.val();
        li.textContent = data.name + " | " + data.description + " | " + data.category + " | " + data.price + "|" + data.quantity + "|";
        productsList.appendChild(li);
    });
});
