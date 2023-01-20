// business logic
function beepBoop(n) {
  let numbers = [];
  for (let i = 0; i <= n; i++) {
    if (i === 1) {
      let i = "Beep!";
      numbers.push(i);
      console.log(i);
    } else if (i === 2) {
      let i = "Boop!";
      numbers.push(i);
      console.log(i);
    } else {
    numbers.push(i);
    console.log(i);
    };
  }
}


// ui logic

window.onload = function() {
  document.querySelector("form#number-form").onsubmit = function(event) {
    event.preventDefault();
  };
};