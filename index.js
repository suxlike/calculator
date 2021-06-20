// Add event listener to buttons
for (let i = 1; i <= 17; i++) {
  document.querySelector(`.a${i}`).addEventListener("click", buttonPressed);
}
let opeBttns = document.querySelectorAll(".a2,.a3,.a4,.a8");
let div = document.querySelector(".a2");
let mul = document.querySelector(".a3");
let sub = document.querySelector(".a4");
let plu = document.querySelector(".a8");
function disableButtons() {
  plu.disabled = true;
  sub.disabled = true;
  mul.disabled = true;
  div.disabled = true;
}
function unableButtons() {
  plu.disabled = false;
  sub.disabled = false;
  mul.disabled = false;
  div.disabled = false;
}
let screenEle = document.querySelector(".screen");
let screenTxt = [];
let argument = [];
let firstValue = 0;
let secondValue = 0;
let ope = "q";
let result = 0;
function clearValue() {
  firstValue = 0;
  secondValue = 0;
  argument = [];
}
function buttonPressed(e) {
  switch (e.target.dataset.val) {
    case "1":
      argument.push(1);
      screenTxt.push(1);
      screenEle.textContent = screenTxt.join("");
      break;
    case "2":
      argument.push(2);
      screenTxt.push(2);
      screenEle.textContent = screenTxt.join("");
      break;
    case "3":
      argument.push(3);
      screenTxt.push(3);
      screenEle.textContent = screenTxt.join("");
      break;
    case "4":
      argument.push(4);
      screenTxt.push(`4`);
      screenEle.textContent = screenTxt.join("");
      break;
    case "5":
      argument.push(5);
      screenTxt.push(5);
      screenEle.textContent = screenTxt.join("");
      break;
    case "6":
      argument.push(6);
      screenTxt.push(6);
      screenEle.textContent = screenTxt.join("");
      break;
    case "7":
      argument.push(7);
      screenTxt.push(7);
      screenEle.textContent = screenTxt.join("");
      break;
    case "8":
      argument.push(8);
      screenTxt.push(8);
      screenEle.textContent = screenTxt.join("");
      break;
    case "9":
      argument.push(9);
      screenTxt.push(9);
      screenEle.textContent = screenTxt.join("");
      break;
    case "0":
      argument.push(0);
      screenTxt.push(0);
      screenEle.textContent = screenTxt.join("");
      break;
    case "dot":
      argument.push(`.`);
      screenTxt.push(`.`);
      screenEle.textContent = screenTxt.join("");
      break;
    case "c":
      clearValue();
      unableButtons();
      screenTxt = [];
      screenEle.textContent = screenTxt.join("");
      break;
    case "+":
      disableButtons();
      firstValue = argument.join("");
      screenTxt.push(`+`);
      screenEle.textContent = screenTxt.join("");
      argument = [];
      ope = "+";
      break;
    case "-":
      disableButtons();

      firstValue = argument.join("");
      screenTxt.push(`-`);
      screenEle.textContent = screenTxt.join("");
      argument = [];
      ope = "-";

      break;
    case "*":
      disableButtons();
      firstValue = argument.join("");
      screenTxt.push(`*`);
      screenEle.textContent = screenTxt.join("");
      argument = [];
      ope = "*";
      break;
    case "/":
      disableButtons();
      firstValue = argument.join("");
      screenTxt.push("/");
      screenEle.textContent = screenTxt.join("");
      argument = [];
      ope = "/";
      break;
    case "entr":
      unableButtons();
      secondValue = argument.join("");
      switch (ope) {
        case "+":
          result = Number(firstValue) + Number(secondValue);
          screenEle.textContent = `${result}`;
          clearValue();
          argument.push(result);
          ope = "e";
          break;
        case "-":
          result = Number(firstValue) - Number(secondValue);
          screenEle.textContent = `${result}`;
          clearValue();
          argument.push(result);
          ope = "e";
          break;
        case "*":
          result = Number(firstValue) * Number(secondValue);
          screenEle.textContent = `${result}`;
          clearValue();
          argument.push(result);
          ope = "e";
          break;
        case "/":
          result = Number(firstValue) / Number(secondValue);
          screenEle.textContent = `${result}`;
          clearValue();
          argument.push(result);
          ope = "e";
          break;
      }
      screenTxt = [];
      break;
  }
}
