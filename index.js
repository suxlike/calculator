for (let i = 1; i <= 17; i++) {
  document.querySelector(`.a${i}`).addEventListener("click", buttonPressed);
}

function buttonPressed(e) {
  console.log(e.target.dataset.val);
}
