// This function clear all the values

function clearScreen() {
    document.getElementById("result").value = "";
}

// This function is for backspace

function backSpace() {
    var value = document.getElementById("result").value;

    document.getElementById("result").value = value.substr(0, value.length - 1);
}
document.addEventListener("keydown",function(event){
    if ((event.code == "Backspace")) {
        backSpace();
    }
});

// This function display values
document.addEventListener("keydown", function(event) {    
      // Check if the key pressed is a number or operator key on the number pad
      if ((event.code.startsWith("Numpad") && event.key >= 0 && event.key <= 9)
         || event.code == "NumpadDecimal" || event.code == "NumpadAdd" || event.code == "NumpadSubtract" 
         || event.code == "NumpadMultiply" || event.code == "NumpadDivide") {
        // Call the display() function to update the calculator display
        display(event.key);
      }
});

function display(value) {
    document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result

function calculate() {
    var p = document.getElementById("result").value;

    var q = eval(p);

    document.getElementById("result").value = q;
}

document.addEventListener("keydown",function(event){
    if ((event.code == "Enter") || (event.code == "NumpadEnter")) {
        calculate();
    }
});