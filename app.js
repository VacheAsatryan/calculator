let select;
let arr = [];
let calculate = document.getElementById('calculate');
let result = document.getElementById('result');

calculate.addEventListener('click', () => {
  select = document.getElementById('select').value;
  arr = select.split('');
  result.innerHTML = eval(select);
});
