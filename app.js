// calculation function
function productPriceCalculator(inputId, isIncrement, rateId, isMobile) {
    const inputField = document.getElementById(inputId);
    if (isIncrement) {
        inputField.value++;
    }
    else if (inputField.value > 0) {
        inputField.value--
    }
    const inputValue = inputField.value;
    const productPrice = document.getElementById(rateId);
    if (isMobile) {
        var totalProductsPrice = inputValue * 1219;
    }
    else {
        var totalProductsPrice = inputValue * 59;
    }
    productPrice.innerText = totalProductsPrice;
}

// total calculation
function total() {
    const subtotal = document.getElementById("subtotal");
    const mobileRate = document.getElementById("mobile-rate").innerText;
    const caseRate = document.getElementById("case-rate").innerText;
    const subtotalAmount = parseFloat(mobileRate) + parseFloat(caseRate);
    subtotal.innerText = subtotalAmount;
    const taxField = document.getElementById("tax");
    const tax = subtotalAmount * 10 / 100;
    taxField.innerText = tax;
    const total = document.getElementById("total")
    total.innerText = subtotalAmount + tax;
}

// phone increment
document.getElementById("phone-increment").addEventListener("click", function () {
    productPriceCalculator("phone-input", true, "mobile-rate", true);
    total();
})
// phone decrement
document.getElementById("phone-decrement").addEventListener("click", function () {
    productPriceCalculator("phone-input", false, "mobile-rate", true);
    total();
})
// case increment
document.getElementById("case-increment").addEventListener("click", function () {
    productPriceCalculator("case-input", true, "case-rate", false);
    total();
})
// case decrement
document.getElementById("case-decrement").addEventListener("click", function () {
    productPriceCalculator("case-input", false, "case-rate", false);
    total();
})