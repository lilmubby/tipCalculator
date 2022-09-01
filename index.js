let bill = document.querySelector('#bill');
let tipClick = document.querySelectorAll('.tip');
let custom = document.querySelector('#custom');
let none = document.querySelector('.none');
let peopleInput = document.querySelector('#people');
let tipAmount = document.querySelector('.tipped');
let totalInput = document.querySelector('.total-container input');
let reset = document.querySelector('#btn');

let total;
let people;
let tip;
let tipResult;
let totalResult;

totalInput.addEventListener('input', () => {
  total = totalInput.value;
  console.log(total);
});
peopleInput.addEventListener('input', () => {
  if (peopleInput.value < 1) {
    none.textContent = "Can't be zero";
  } else {
    people = peopleInput.value;
    console.log(people); 
  }
});
tipClick.forEach(tips => tips.addEventListener('click', () => {
  tip = tips.textContent;
  calculateTip(total, tip);
  console.log(tip);
}));

let calculate = (total, people, tip) => (total * people) + ((tip/100) * total);

let calculateTip = (total, tip) => (tip/100) * total;

// tipAmount.textContent = tipResult;

reset.addEventListener('click', () => {
  tipAmount.textContent = '$0.00';
  totalInput.value = '$0.00';
  bill.value = '$0.00';
  peopleInput.value = '0';
})