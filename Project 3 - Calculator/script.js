

// Target Input Box -->
let displayEl = document.querySelector("#result");

// Target All Buttons --->
let ButtonsEl = document.querySelectorAll("button");


ButtonsEl.forEach(function(button){

    button.addEventListener("click",function(){

        let value = button.innerText;

        // Target Clear Button --->
        if(value === "C"){
            displayEl.value = "";
        }

        // Target Equal-to Button --->
        else if(value === "="){
            try{
                displayEl.value = eval(displayEl.value);
            } catch{
                displayEl.value = "ERROR";
            }
        }

        // Target Display Sum --->
        else{
            displayEl.value = displayEl.value + value;
        }
        

    })

})




















