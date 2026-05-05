import { db } from "./app.js";
import { ref, push} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-database.js";

var nameInput = document.getElementById('nameInput');
var descriptionInput = document.getElementById('descriptionInput');
var categorySelect = document.getElementById('categorySelect');
var priceInput = document.getElementById('priceInput');
var quantityInput = document.getElementById('quantityInput');
var addButton = document.getElementById('addButton');
const successMessage = document.getElementById('successMessage');
const form = document.getElementById('productForm');

const productsListRef = ref(db, "products")

// Ao clicar no botão:
addButton.addEventListener("click", () => {
    if (!validateForm()) {
        alert("Preencha todos os campos antes de salvar.");
        return;
    }
    create(
        nameInput.value, 
        descriptionInput.value, 
        categorySelect.value, 
        priceInput.value,
        quantityInput.value
    );
    successMessage.style.display = "block";
    setTimeout( () => {
        successMessage.style.display = "none"
    }, 3000);

    form.reset();
});

function create(name, description, category, price, quantity) {
    var data = {
        name: name,
        description: description,
        category: category,
        price: price,
        quantity: quantity,
    }
    return push(ref(db, "products"), data);
};

function validateForm() {
    if (
        nameInput.value.trim() === "" ||
        descriptionInput.value.trim() === "" ||
        categorySelect.value.trim() === "" ||
        priceInput.value.trim() === "" ||
        quantityInput.value.trim() === ""
    ) {
        return false;
    }
    return true;
}
