let select;
let arr = [];
const calculate = document.getElementById('calculate');
const result = document.getElementById('result');

calculate.addEventListener('click', () => {
  select = document.getElementById('select').value;
  arr = select.split('');
  result.innerHTML = eval(select);
});
