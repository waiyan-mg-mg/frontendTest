const calc_btn = document.getElementById("btnCalculate");
const firstNumber = document.getElementById("fistNumber");
const secondNumber = document.getElementById("secondNumber");
const operator = document.getElementById("operator");
const result_box = document.getElementById("result");
calc_btn.addEventListener("click", () => {
  let fval = firstNumber.value ? Number(firstNumber.value) : null;
  let sval = secondNumber.value ? Number(secondNumber.value) : null;
  let finalOutput = ".";
  if (fval && sval && operator.value) {
    switch (operator.value) {
      case "+":
        finalOutput = fval + sval;
        break;
      case "-":
        finalOutput = fval - sval;
        break;
      case "*":
        finalOutput = fval * sval;
        break;
      case "/":
        finalOutput = fval / sval;
        break;
      default:
        finalOutput = underfind;
        console.log("somethinng went wrond");
        break;
    }
    result_box.value = finalOutput;
  } else {
    result_box.value = "invalid query";
  }
});
