// business logic
function beepBoop(n) {
  const name = addressUser();
  let numbers = [];
  for (let i = 0; i <= n; i++) {
    if (i.toString().includes(1) && !i.toString().includes(2) && !i.toString().includes(3)) {
      let i = "Beep!";
      numbers.push(i);
    } else if (i.toString().includes(2) && !i.toString().includes(3)) {
      let i = "Boop!";
      numbers.push(i);
    } else if (i.toString().includes(3)) {
      let i = "Won't you be my neighbor, ".concat(name).concat("?");
      numbers.push(i);
    } else {
    numbers.push(i)
    };
  }
  return numbers;
}

// ui logic
window.addEventListener("load", function() {
  document.getElementById("number-form").addEventListener("submit", submitForm);
  document.getElementById("reset-button").addEventListener("click", clearScreen);
});

function submitForm(event) {
  event.preventDefault();
  const numberInput = document.getElementById("number-input").value;
  const p = document.getElementById("display-array");
  let numberArray = beepBoop(numberInput);
  p.innerText = numberArray.join(", ");
};

function clearScreen() {
  document.getElementById("number-form").reset();
  const p = document.getElementById("display-array");
  p.innerText = "";
}

function addressUser() {
  const name = document.getElementById("name-input").value;
  return name;
}