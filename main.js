const display = document.querySelector(".input");
const calcButtons = document.querySelectorAll("button");
const result = document.querySelector(".result");


calcButtons.forEach(function(button) {
  button.addEventListener('click', calculate); 
});

function calculate (event) {
  const clickedButtonValue = event.target.value;
  
  if (clickedButtonValue === "=") {
      if(display.value !== "") {
        display.value = eval(display.value);
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

