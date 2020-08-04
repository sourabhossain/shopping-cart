function handleProductChange(isIncrease) {
    const caseInput = document.querySelector("#case-count");
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount + isIncrease;

    document.querySelector("#case-count").value = caseNewCount; 
    document.querySelector("#case-total").innerHTML = "$" + (caseNewCount * 59);
}