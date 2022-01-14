let INT_A = null;
let INT_B = null;
let IS_DECIMAL_A = null;
let IS_DECIMAL_B = null;
let OPERATION = null;

monitorEvents();

function add(a, b) {
  return Number((a + b)).toFixed(6);
}

function subtract(a, b) {
  return Number((a - b)).toFixed(6);
}

function multiply(a, b) {
  return Number((a * b)).toFixed(6);
}

function divide(a, b) {
  return Number((a / b)).toFixed(6);
}

function operate(operation, a, b) {
  if (operation == "add") {
    return add(a, b);
  }
  else if (operation == "subtract") {
    return subtract(a, b);
  }
  else if (operation == "multiply") {
    return multiply(a, b);
  }
  else if (operation == "divide") {
    if (INT_B == 0) {
      alert("Don't even try it!");
      resetCalc();
    }
    else {
      return divide(a, b);
    }
  }
  else {
    return null;
  }
}

// Takes the result and displays it on the calculator
function showDisplay(result) {
  const display = document.querySelector('#display');
  if (display.textContent == "DISPLAY") {
    display.textContent = result;
  }
  else {
    display.textContent += result;
  }
}

function resetCalc() {
  INT_A = null;
  INT_B = null;
  IS_DECIMAL_A = null;
  IS_DECIMAL_B = null;
  OPERATION = null;
  const display = document.querySelector('#display');
  display.textContent = "DISPLAY";
}

function eventInput() {
  const numbers = document.querySelectorAll('.number');
  numbers.forEach(n => {
    n.addEventListener('click', function() {
      switch (n.id) {
        case "number0":
          if (OPERATION == null) {
            if (INT_A == null) { INT_A = 0 }
            else { INT_A += "0" }
          } 
          else {
            if (INT_B == null) { INT_B = 0 }
            else { INT_B += "0" }
          }
          showDisplay(0);
          return;
        case "number1":
          if (OPERATION == null) {
            if (INT_A == null) { INT_A = 1 }
            else { INT_A += "1" }
          } 
          else {
            if (INT_B == null) { INT_B = 1 }
            else { INT_B += "1" }
          }
          showDisplay(1);
          return;
        case "number2":
          if (OPERATION == null) {
            if (INT_A == null) { INT_A = 2 }
            else { INT_A += "2" }
          } 
          else {
            if (INT_B == null) { INT_B = 2 }
            else { INT_B += "2" }
          }
          showDisplay(2);
          return;
        case "number3":
          if (OPERATION == null) {
            if (INT_A == null) { INT_A = 3 }
            else { INT_A += "3" }
          } 
          else {
            if (INT_B == null) { INT_B = 3 }
            else { INT_B += "3" }
          }
          showDisplay(3);
          return;
        case "number4":
          if (OPERATION == null) {
            if (INT_A == null) { INT_A = 4 }
            else { INT_A += "4" }
          } 
          else {
            if (INT_B == null) { INT_B = 4 }
            else { INT_B += "4" }
          }
          showDisplay(4);
          return;
        case "number5":
          if (OPERATION == null) {
            if (INT_A == null) { INT_A = 5 }
            else { INT_A += "5" }
          } 
          else {
            if (INT_B == null) { INT_B = 5 }
            else { INT_B += "5" }
          }
          showDisplay(5);
          return;
        case "number6":
          if (OPERATION == null) {
            if (INT_A == null) { INT_A = 6 }
            else { INT_A += "6" }
          } 
          else {
            if (INT_B == null) { INT_B = 6 }
            else { INT_B += "6" }
          }
          showDisplay(6);
          return;
        case "number7":
          if (OPERATION == null) {
            if (INT_A == null) { INT_A = 7 }
            else { INT_A += "7" }
          } 
          else {
            if (INT_B == null) { INT_B = 7 }
            else { INT_B += "7" }
          }
          showDisplay(7);
          return;
        case "number8":
          if (OPERATION == null) {
            if (INT_A == null) { INT_A = 8 }
            else { INT_A += "8" }
          } 
          else {
            if (INT_B == null) { INT_B = 8 }
            else { INT_B += "8" }
          }
          showDisplay(8);
          return;
        case "number9":
          if (OPERATION == null) {
            if (INT_A == null) { INT_A = 9 }
            else { INT_A += "9" }
          } 
          else {
            if (INT_B == null) { INT_B = 9 }
            else { INT_B += "9" }
          }
          showDisplay(9);
          return;
      };
    })
  })
}

function eventOperation() {
  const operators = document.querySelectorAll('.operator');
  operators.forEach(operator => {
    operator.addEventListener('click', function() {
      switch (operator.id) {
        case "add":
          if (OPERATION == null && INT_A != null) {
            OPERATION = "add";
            showDisplay(" + ");
          }
          return;
        case "subtract":
          if (OPERATION == null && INT_A != null) {
            OPERATION = "subtract";
            showDisplay(" - ");
          }
          return;
        case "multiply":
          if (OPERATION == null && INT_A != null) {
            OPERATION = "multiply";
            showDisplay(" * ");
          }
          return;
        case "divide":
          if (OPERATION == null && INT_A != null) {
            OPERATION = "divide";
            showDisplay(" / ");
          }
          return;
        case "clear":
          resetCalc();
          return;         
      }
    })
  })
}

function eventResult() {
  const enterButton = document.querySelector('#enter');
  enterButton.addEventListener('click', function() {
    if (INT_A != null && INT_B != null) {
    const display = document.querySelector('#display');
    display.textContent = "";
    let result = operate(OPERATION, INT_A, INT_B);
    showDisplay(result);
    INT_A = result;
    INT_B = null;
    IS_DECIMAL_A = null;
    IS_DECIMAL_B = null;
    OPERATION = null;
    }
  })
};

function eventDecimal() {
  const decimal = document.querySelector('#decimal');
  decimal.addEventListener('click', function() {
    console.log("here");
    if (OPERATION == null) { //If theres no operation then display has to be on INT_A
      if (IS_DECIMAL_A) { //If theres a decimal already - return
        return;
      }
      IS_DECIMAL_A = true;
      (INT_A == null) ? INT_A = '0.' : INT_A = '.'
      // if (INT_A == null) {
      //   INT_A = "0."
      // }
      // else {
      //   INT_A += '.';
      // }
      showDisplay('.');
    }
    else { //Must be dealing with INT_B then
      if (IS_DECIMAL_B) {
        return;
      }
      IS_DECIMAL_B = true;
      (INT_B == null) ? INT_B = '0.' : INT_B = '.'
      //INT_B += '.';
      showDisplay('.');
    }
  });
}

function monitorEvents() {
  eventInput();
  eventOperation();
  eventResult();
  eventDecimal();
}
