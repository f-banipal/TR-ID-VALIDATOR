const containerId = document.querySelector(".container");
const checkBtn = document.querySelector(".btn");
const validationMessage = document.querySelector(".validation");
const tcInput = document.querySelector(".tc-id-input");

checkBtn.addEventListener("click", function () {
    const inputValue = tcInput.value;

    const isValidInput = /^\d{11}$/.test(inputValue) && inputValue[0] !== '0';

    if (isValidInput) {
        const calculateChecksum = (indices) => indices.reduce((acc, index) => acc + parseInt(inputValue[index]), 0);
        
        const valid1 = (calculateChecksum([0, 2, 4, 6, 8]) * 7) - calculateChecksum([1, 3, 5, 7]);
        const valid2 = calculateChecksum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

        if (valid1 % 10 === parseInt(inputValue[9]) && valid2 % 10 === parseInt(inputValue[10])) {
            validationMessage.textContent = `${inputValue} TC number Valided`;
            tcInput.style.backgroundColor = "green";
        } else {
            validationMessage.textContent = 'TC number not Valided';
        }
    } else {
        validationMessage.textContent = isValidInput ? "Error: ID number must not start with 0." : "Error: ID number must consist of 11 digits.";
        tcInput.style.backgroundColor = "red";
    }
});
