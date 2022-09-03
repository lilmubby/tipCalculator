let billInput = document.querySelector('#bill');
let tipClick = document.querySelectorAll('.tip');
let custom = document.querySelector('#custom');
let none = document.querySelector('.none');
let peopleInput = document.querySelector('#people');
let tipAmount = document.querySelector('.tipped');
let totalAmount = document.querySelector('.total-container .billed');
let reset = document.querySelector('#btn');

let bill;
let people;
let tip;

// this is the bill input
billInput.addEventListener('input', () => {
  bill = Number(billInput.value);
  console.log(bill);
})

// this takes the people input
peopleInput.addEventListener('input', () => {
  if (peopleInput.value < 1) {
    none.textContent = "Can't be zero";
  } else {
    none.textContent = '';
    people = Number(peopleInput.value);
    console.log(people); 
    totalAmount.textContent = Number(calculate(bill, people, tip));
    tipAmount.textContent = Number(calculateTip(bill, people, tip));
    // console.log(tipAmount.textContent.length)
  }
});

// this is the tip percentages
tipClick.forEach(tips => tips.addEventListener('click', () => {
  tip = Number(tips.textContent);
  console.log(tip);
  // totalAmount.textContent = Number(calculate(bill, people, tip));
  // tipAmount.textContent = Number(calculateTip(bill, people, tip));
}));

// this is the custom input
custom.addEventListener('input', () => {
  // console.log(custom.value);
  tip = Number(custom.value);
  console.log(tip);
  // totalAmount.textContent = Number(calculate(bill, people, tip));
  // tipAmount.textContent = Number(calculateTip(bill, people, tip));
})


// this is the arithmetic operations
let calculate = (bill, people, tip) => 
  ((bill / people) + ((tip / 100) * (bill / people))).toFixed(2);

let calculateTip = (bill, people, tip) => 
  ((bill / people) * (tip/100)).toFixed(2);

// this is the reset button
reset.addEventListener('click', () => {
  tipAmount.textContent = '$0.00';
  totalAmount.textContent = '';
  bill.value = '';
  peopleInput.value = '';
})