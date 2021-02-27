const display = document.querySelector(".input");
const calcButtons = document.querySelectorAll("button");
const result = document.querySelector(".result");
var equalPressed = false;


calcButtons.forEach(function(button) {
  button.addEventListener('click', calculate); 
});

function calculate (event) {
  const clickedButtonValue = event.target.value;
  
    if(equalPressed && (clickedButtonValue === "+" || clickedButtonValue === "-" || clickedButtonValue === "*" || clickedButtonValue === "/")){
      display.value = result.value;
      equalPressed = false;
    }
    if (clickedButtonValue === "=") {
      equalPressed = true;
      if(display.value !== "") {
        result.value = eval(display.value);
      }
    } else if (clickedButtonValue === "AC"){
        display.value = "";
        result.value = "";
    } else if (clickedButtonValue === "delete") {
        var val = display.value.slice(0, -1);
        display.value = val;
        result.value = "";
    } else {
        if(display.value.length > 17) {
            return;
        } display.value += clickedButtonValue;
        result.value = "";
    } 
}





