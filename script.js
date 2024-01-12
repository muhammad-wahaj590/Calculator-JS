const display = document.querySelector("#input-box")
const button = document.querySelectorAll("button")

// Convert NodeList to Array for easier iteration
const buttonsArr = Array.from(button)
let string = ""                  // Variable to store the input string
let operatorClicked = false      // Flag to track if an operator has been clicked  
let resultDisplayed = false      // Flag to track if the result has been displayed

buttonsArr.forEach(function(btn){
    btn.addEventListener("click", (e) => {

        if(operatorClicked && e.target.innerHTML === "="){
            alert("Please enter a value after the operator before pressing equals (=).")
            return; 
        }

        if(e.target.innerHTML === "AC"){
            // Clear the input string and reset flags
            string = ""
            operatorClicked = false
            resultDisplayed = false
            display.value = string
        }
        else if(e.target.innerHTML === "DEL"){
            // Remove the last character from the input string
            string = string.substring(0, string.length-1);
            display.value = string
        }
        else if(e.target.innerHTML === "="){
            try{
                const result = eval(string);
                if(result !== undefined){
                    string = result
                    display.value = string
                    resultDisplayed = true
                }
                else{
                    alert("Invalid expression. Please enter a valid mathematical expression.")
                }  
            } catch (error) {
                alert("Invalid expression. Please enter a valid mathematical expression.")
            }
        }
        else{
            if(resultDisplayed && /[0-9]/.test(e.target.innerHTML)){
                string = e.target.innerHTML
                resultDisplayed = false
            }else{
                string += e.target.innerHTML
            }
            display.value = string

            if("+-*/%".includes(e.target.innerHTML)){
                operatorClicked = true
            }else{
                operatorClicked = false
            }
        }

        


    })
})

