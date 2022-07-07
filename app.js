/* eslint-disable radix */
const out = document.getElementById('out');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
let num1; let
  num2;

plus.addEventListener('click', () => {
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);
  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);
  out.innerHTML = num1 + num2;
});
minus.addEventListener('click', () => {
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);
  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);
  out.innerHTML = num1 - num2;
});
divide.addEventListener('click', () => {
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);
  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);
  out.innerHTML = num1 / num2;
});
multiply.addEventListener('click', () => {
  num1 = document.getElementById('n1').value;
  num1 = parseInt(num1);
  num2 = document.getElementById('n2').value;
  num2 = parseInt(num2);
  out.innerHTML = num1 * num2;
});
