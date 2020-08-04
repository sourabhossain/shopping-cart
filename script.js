document.querySelector("#case-increase").addEventListener("click", function() {
    const caseInput = document.querySelector("#case-count");
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount + 1;
    
    document.querySelector("#case-count").value =caseNewCount; 
    document.querySelector("#case-total").innerHTML = "$" + (caseNewCount * 59);
});