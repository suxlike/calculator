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
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      argument.push(Number(e.target.dataset.val));
      screenTxt.push(Number(e.target.dataset.val));
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
    case "-":
    case "*":
    case "/":
      disableButtons();
      firstValue = argument.join("");
      screenTxt.push(e.target.dataset.val);
      screenEle.textContent = screenTxt.join("");
      argument = [];
      ope = e.target.dataset.val;
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
