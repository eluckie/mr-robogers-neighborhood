// business logic
function beepBoop(n) {
  let numbers = [];
  for (let i = 0; i <= n; i++) {
    if (i === 1 || i.toString().includes(1) && !i.toString().includes(2) && !i.toString().includes(3)) {
      let i = "Beep!";
      numbers.push(i);
    } else if (i === 2 || i.toString().includes(2) && !i.toString().includes(3)) {
      let i = "Boop!";
      numbers.push(i);
    } else if (i === 3 || i.toString().includes(3)) {
      let i = "Won't you be my neighbor?";
      numbers.push(i);
    } else {
    numbers.push(i)
    };
  }
  return numbers;
}


// ui logic

window.onload = function() {
  document.querySelector("form#number-form").onsubmit = function(event) {
    event.preventDefault();
    beepBoop();
    const div = document.getElementById("user-array");
    const numberInput = document.getElementById("number-input").value;
    let p = document.createElement("p");
    let numberArray = beepBoop(numberInput);
    p.innerText = numberArray.join(", ");
    div.append(p);
  };
};