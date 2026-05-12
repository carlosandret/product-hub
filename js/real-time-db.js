import { db } from "./app.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-database.js";

var productsBody = document.getElementById('productsBody');
const productsBodyRef = ref(db, "products");


onValue(productsBodyRef, (snapshot) => {
    productsBody.innerHTML = "";

    count = 0
    snapshot.forEach((item) => {
        const tr = document.createElement("tr");
        const data = item.val();
        count += 1 
        tr.innerHTML = `
            <td>${count}</td>
            <td>${data.name}</td>
            <td>${data.description}</td>
            <td>${data.category}</td>
            <td>${data.price}</td>
            <td>${data.quantity}</td>
        `;
        productsBody.appendChild(tr);
    });
});
