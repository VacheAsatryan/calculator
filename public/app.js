let select;
let arr = [];
const p = document.getElementById('p');
const calculate = document.getElementById('calculate');
const result = document.getElementById('result');
const save = document.getElementById('save');
const num = document.getElementById('saved');

calculate.addEventListener('click', () => {
  select = document.getElementById('select').value;
  arr = select.split('');
  result.innerHTML = eval(select);
});

save.addEventListener('click', () => {
  fetch('http://localhost:3001/test', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ value: result.innerHTML }),
  }).then(data => console.log(data));
});

fetch('http://localhost:3001/test', {
  method: 'GET',
})
  .then(resp => resp.json())
  // eslint-disable-next-line no-return-assign
  .then(rep => result.innerHTML = rep.value);
