function handleProductChange(product, isIncrease) {
    const productCount = getInputValue(product);
    const productNewCount = parseInt(productCount) + isIncrease;

    if (productNewCount == -1) {
        return;
    }

    document.querySelector("#" + product + "-count").value = productNewCount;

    let productTotal = 0;

    if (product == "phone") {
        productTotal = productNewCount * 1219;
    }

    if (product == "case") {
        productTotal = productNewCount * 59;
    }

    document.querySelector("#" + product + "-total").innerHTML = "$" + productTotal;
    calculateTotal();
}

function calculateTotal() {
    const phoneCount = getInputValue("phone");
    const caseCount = getInputValue("case");

    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.querySelector("#total-price").innerHTML = "$" + totalPrice;
    
    const tax = Math.round(totalPrice * 0.15);
    document.querySelector("#tax-amount").innerHTML = "$" + tax;

    const grandTotal = totalPrice + tax;
    document.querySelector("#grand-total").innerHTML = "$" + grandTotal;
}

function getInputValue(product) {
    const productInput = document.querySelector("#" + product + "-count").value;
    const productCount = parseInt(productInput);
    return productInput;
}