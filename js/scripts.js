// business logic
function beepBoop(n) {
  const name = addressUser();
  let numbers = [];

  for (let i = 0; i <= n; i++) {
    if (i.toString().includes(3)) {
      let i = "Won't you be my neighbor, ".concat(name).concat("?");
      numbers.push(i);
    } else if (i.toString().includes(2)) {
      let i = "Boop!";
      numbers.push(i);
    } else if (i.toString().includes(1)) {
      let i = "Beep!"; 
      numbers.push(i);
    } else {
    numbers.push(i)
    };
  }
  return numbers;
}

function beepBoopReverse(n) {
  const numbers = beepBoop(n);
  const reverseNumbers = numbers.reverse();
  return reverseNumbers;
}

// ui logic
window.addEventListener("load", function() {
  document.getElementById("number-form").addEventListener("submit", submitForm);
  document.getElementById("reset-button").addEventListener("click", clearScreen);
  document.getElementById("reverse-button").addEventListener("click", reverseOrder);
});

function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById("name-input").value;
  const numberInput = document.getElementById("number-input").value;
  const p = document.getElementById("display-array");
  const errorMessage = document.getElementById("error");
  const sunPhoto = document.getElementById("sun-photo");
  const rainbowPhoto = document.getElementById("rainbow-photo");
  let numberArray = beepBoop(numberInput);

  if (!name || !numberInput) {
    errorMessage.removeAttribute("class");
  } else if (name && numberInput) {
    p.innerText = numberArray.join(", ");
    sunPhoto.removeAttribute("class");
    rainbowPhoto.setAttribute("class", "hidden");
    errorMessage.setAttribute("class", "hidden");
  }
};

function reverseOrder() {
  const name = document.getElementById("name-input").value;
  const numberInput = document.getElementById("number-input").value;
  const p = document.getElementById("display-array");
  const errorMessage = document.getElementById("error");
  const sunPhoto = document.getElementById("sun-photo");
  const rainbowPhoto = document.getElementById("rainbow-photo");
  let numberArray = beepBoopReverse(numberInput);

  if (!name || !numberInput) {
    errorMessage.removeAttribute("class");
  } else if (name && numberInput) {
    p.innerText = numberArray.join(", ");
    rainbowPhoto.removeAttribute("class");
    sunPhoto.setAttribute("class", "hidden");
    errorMessage.setAttribute("class", "hidden");
  }
}

function clearScreen() {
  const p = document.getElementById("display-array");
  const sunPhoto = document.getElementById("sun-photo");
  const rainbowPhoto = document.getElementById("rainbow-photo");
  const errorMessage = document.getElementById("error");
  p.innerText = "";
  sunPhoto.setAttribute("class", "hidden");
  rainbowPhoto.setAttribute("class", "hidden");
  errorMessage.setAttribute("class", "hidden");
  document.getElementById("number-form").reset();
}

function addressUser() {
  const name = document.getElementById("name-input").value;
  return name;
}