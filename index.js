// Add event listener to buttons
for (let i = 1; i <= 17; i++) {
  document.querySelector(`.a${i}`).addEventListener("click", buttonPressed);
}
let screenEle = document.querySelector(".screen");
let screenTxt = [];
let argument = [];
let firstValue = 0;
let secondValue = 0;
let ope = "";
let result = 0;
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
    case "c":
      firstValue = 0;
      secondValue = 0;
      argument = [];
      screenTxt = [];
      screenEle.textContent = `0`;
      break;
    case "+":
      firstValue = argument.join("");
      screenTxt.push(`+`);
      screenEle.textContent = screenTxt.join("");
      argument = [];
      ope = "+";
      break;
    case "-":
      firstValue = argument.join("");
      screenTxt.push(`-`);
      screenEle.textContent = screenTxt.join("");
      argument = [];
      ope = "-";
      break;
    case "*":
      firstValue = argument.join("");
      screenTxt.push(`*`);
      screenEle.textContent = screenTxt.join("");
      argument = [];
      ope = "*";
      break;
    case "/":
      firstValue = argument.join("");
      screenTxt.push("/");
      screenEle.textContent = screenTxt.join("");
      argument = [];
      ope = "/";
      break;
    case "entr":
      secondValue = argument.join("");
      switch (ope) {
        case "+":
          result = Number(firstValue) + Number(secondValue);
          screenEle.textContent = `${result}`;
          firstValue = 0;
          secondValue = 0;
          argument = [];
          break;
        case "-":
          result = Number(firstValue) - Number(secondValue);
          screenEle.textContent = `${result}`;
          firstValue = 0;
          secondValue = 0;
          argument = [];
          break;
        case "*":
          result = Number(firstValue) * Number(secondValue);
          screenEle.textContent = `${result}`;
          firstValue = 0;
          secondValue = 0;
          argument = [];
          break;
        case "/":
          result = Number(firstValue) / Number(secondValue);
          screenEle.textContent = `${result}`;
          firstValue = 0;
          secondValue = 0;
          argument = [];
          break;
      }

      break;
  }
}
