const productsQuantity = document.getElementById("products-quantity");
const monthlyOrders = document.getElementById("monthly-orders");
const packageChoice = document.getElementById("package-choice");

const basicDropdown = document.querySelector("option[value=basic]");
const professionalDropdown = document.querySelector("option[value=professional]");
const premiumDropdown = document.querySelector("option[value=premium]");

const productsOutput = document.querySelector(".products");
const ordersOutput = document.querySelector(".orders");
const packageOutput = document.querySelector(".package");
const totalOutput = document.querySelector(".total span");

const packagePrices = [0, 25, 60];


productsQuantity.addEventListener("keyup", function() {
    productsOutput.style.display = "block";
    productsOutput.innerText = `Products ${productsQuantity.value} * 0.5$ $${productsQuantity.value * 0.5}`;
    totalOutput.innerText = `${productsQuantity.value * 0.5 + monthlyOrders.value * 0.25}`;
});

monthlyOrders.addEventListener("keyup", function() {
    ordersOutput.style.display = "block";
    ordersOutput.innerText = `Orders ${monthlyOrders.value} * 0.25 $${monthlyOrders.value * 0.25}`;
    totalOutput.innerText = `${productsQuantity.value * 0.5 + monthlyOrders.value * 0.25}`;
});

packageChoice.addEventListener("click", function() {
   if (basicDropdown.selected) {
       packageOutput.style.display = "block";
       packageOutput.innerText = `Package ${basicDropdown.value} $${packagePrices[0]}`;
   } else if (professionalDropdown.selected) {
       packageOutput.style.display = "block";
       packageOutput.innerText = `Package ${professionalDropdown.value} $${packagePrices[1]}`;
   } else if (premiumDropdown.selected) {
       packageOutput.style.display = "block";
       packageOutput.innerText = `Package ${premiumDropdown.value} $${packagePrices[2]}`;
   }
});

function totalValue() {
    if (basicDropdown.selected) {
        totalOutput.innerText = `${productsQuantity.value * 0.5 + monthlyOrders.value * 0.25 + packagePrices[0]}`;
    } else if (professionalDropdown.selected) {
        totalOutput.innerText = `${productsQuantity.value * 0.5 + monthlyOrders.value * 0.25 + packagePrices[1]}`;
    } else if (premiumDropdown.selected) {
        totalOutput.innerText = `${productsQuantity.value * 0.5 + monthlyOrders.value * 0.25 + packagePrices[2]}`;
    }
}

productsQuantity.addEventListener("keyup", totalValue);
monthlyOrders.addEventListener("keyup", totalValue);
packageChoice.addEventListener("click", totalValue);
