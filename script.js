function handleProductChange(productCount, productTotal, productPrice, isIncrease) {
    const caseInput = document.querySelector(productCount);
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount + isIncrease;

    if (caseNewCount == -1) {
        return;
    }

    document.querySelector(productCount).value = caseNewCount;
    document.querySelector(productTotal).innerHTML = "$" + (caseNewCount * productPrice);
}