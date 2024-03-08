const containerId = document.querySelector(".container");
const checkBtn = document.querySelector(".btn");
const validationMessage = document.querySelector(".validation");
const tcInput = document.querySelector(".tc-id-input");


//BUTONA TIKLANDIGINDA EVENT'I



checkBtn.addEventListener("click", function () {
    validateTCNumber();
});

// ENTER TUŞUNA BASILDIĞINDA EVENT'I
tcInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        validateTCNumber();
    }
});

function validateTCNumber() {


    let inputValue = tcInput.value;
    const formattedValue = inputValue.replace(/(\d{3})(?=\d)/g, '$1 ')
   
    if (/^\d+$/.test(inputValue)){
        if(inputValue.length === 11){
            if(inputValue[0] !== '0'){
              
                evenSum = 0;
                oddSum = 0;
                for (let i = 0; i < 9; i++) {
                    if(i % 2 === 0){
                        evenSum = evenSum + parseInt(inputValue[i])
                    }else{
                        oddSum = oddSum + parseInt(inputValue[i])
                    }
                }
                
                const valid1 = evenSum * 7 - oddSum               
                const valid2 = evenSum + oddSum + parseInt(inputValue[9])                              
                   
                if (valid1 % 10 === parseInt(inputValue[9]) && valid2 % 10 === parseInt(inputValue[10])){

                    validationMessage.textContent = `${formattedValue} : TC number Valided`;                 
                    tcInput.style.backgroundColor = "green";
                    
                    tcInput.value = "";
                    
                                   
                }else{
                    validationMessage.textContent = `${inputValue} : TC number not Valided`;
                    tcInput.style.backgroundColor = "white";                
                    tcInput.value = "";
                   
                }
            }else{
                validationMessage.textContent = `Error: ${inputValue} ID number does not start with 0.`;
                tcInput.style.backgroundColor = "white";
                tcInput.value = "";
            }
        }else{
            validationMessage.textContent = `Error: ${inputValue} ID number must consist of 11 digits.`;
            tcInput.style.backgroundColor = "white"
            tcInput.value = "";
        } 
    }else {
        validationMessage.textContent = `Error: ${inputValue} ID number consists of numbers only.`;
        tcInput.style.backgroundColor = "white"
        tcInput.value = "";
    } 
};



