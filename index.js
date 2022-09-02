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
  total = Number(totalInput.value);
  console.log(total);
  // bill.value = calculate(total,people,tip);
});
peopleInput.addEventListener('input', () => {
  if (peopleInput.value < 1) {
    none.textContent = "Can't be zero";
  } else {
    none.textContent = '';
    people = Number(peopleInput.value);
    console.log(people); 
    // bill.value = calculate(total, people, tip);
  }
});
tipClick.forEach(tips => tips.addEventListener('click', () => {
  tip = Number(tips.textContent);
  
  console.log(tip);
  bill.value = calculate(total, people, tip);
  tipAmount.textContent = Number(calculateTip(total, tip));
}));


let calculate = (total, people, tip) => 
  ((total * people) + ((tip/100) * total * people));

let calculateTip = (total, tip) => ((tip/100) * total);




reset.addEventListener('click', () => {
  tipAmount.textContent = '';
  totalInput.value = '';
  bill.value = '';
  peopleInput.value = '0';
})