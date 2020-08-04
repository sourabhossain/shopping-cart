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
}

function getInputValue(product) {
    const productInput = document.querySelector("#" + product + "-count").value;
    const productCount = parseInt(productInput);
    return productInput;
}