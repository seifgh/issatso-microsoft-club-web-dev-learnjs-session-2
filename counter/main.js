let counter = 0;
// select dom elements
const counterValue = document.querySelector("#counter-value");
const incrementBtn = document.querySelector("#increment-btn");

function updateCounterValue() {
  counterValue.textContent = counter;
}

function incrementCounter() {
  counter++;
  updateCounterValue();
}

// add event listners
incrementBtn.addEventListener("click", incrementCounter);
updateCounterValue();
