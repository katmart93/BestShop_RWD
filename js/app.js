const productsQuantity = document.getElementById("products-quantity");
const monthlyOrders = document.getElementById("monthly-orders");
const packageChoice = document.getElementById("package-choice");

const basicDropdown = document.querySelector("option[value=basic]");
const professionalDropdown = document.querySelector("option[value=professional]");
const premiumDropdown = document.querySelector("option[value=premium]");

const productsOutput = document.querySelector(".products");
const ordersOutput = document.querySelector(".orders");
const packageOutput = document.querySelector(".package");


productsQuantity.addEventListener("keyup", function() {
    productsOutput.style.display = "block";
    productsOutput.innerText = `Products ${productsQuantity.value} * 0.5$ $${productsQuantity.value * 0.5}`;
});

monthlyOrders.addEventListener("keyup", function() {
    ordersOutput.style.display = "block";
    ordersOutput.innerText = `Orders ${monthlyOrders.value} * 0.25 $${monthlyOrders.value * 0.25}`;
});

packageChoice.addEventListener("click", function() {
   if (basicDropdown.selected) {
       packageOutput.style.display = "block";
       packageOutput.innerText = `Package ${basicDropdown.value} $0`;
   } else if (professionalDropdown.selected) {
       packageOutput.style.display = "block";
       packageOutput.innerText = `Package ${professionalDropdown.value} $25`;
   } else if (premiumDropdown.selected) {
       packageOutput.style.display = "block";
       packageOutput.innerText = `Package ${premiumDropdown.value} $60`;
   }
});
