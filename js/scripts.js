// business logic
function beepBoop(n) {
  let numbers = [];
  for (let i = 0; i <= n; i++) {
    numbers.push(i);
    console.log(i);
  }
}


// ui logic

window.onload = function() {
  document.querySelector("form#number-form").onsubmit = function(event) {
    event.preventDefault();
  };
};