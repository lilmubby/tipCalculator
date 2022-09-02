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

// this is the total input
totalInput.addEventListener('input', () => {
  total =  Number(totalInput.value);
  console.log(total);
  // bill.value = Number(calculate(total,people,tip));
});

// this takes the people input
peopleInput.addEventListener('input', () => {
  if (peopleInput.value < 1) {
    none.textContent = "Can't be zero";
  } else {
    none.textContent = '';
    people = Number(peopleInput.value);
    console.log(people); 
    // bill.value = Number(calculate(total, people, tip));
  }
});

// this is the tip percentages
tipClick.forEach(tips => tips.addEventListener('click', () => {
  tip = Number(tips.textContent);
  console.log(tip);
  bill.value = Number(calculate(total, people, tip));
  tipAmount.textContent = Number(calculateTip(total, tip));
}));

// this is the custom input
custom.addEventListener('input', () => {
  // console.log(custom.value);
  tip = Number(custom.value);
  console.log(tip);
  bill.value = Number(calculate(total, people, tip));
  tipAmount.textContent = Number(calculateTip(total, tip));
})


// this is the arithmetic operations
let calculate = (total, people, tip) => 
  ((total * people) + ((tip/100) * total * people));

let calculateTip = (total, tip) => ((tip/100) * total);



// this is the reset button
reset.addEventListener('click', () => {
  tipAmount.textContent = '$0.00';
  totalInput.value = '';
  bill.value = '';
  peopleInput.value = '';
})