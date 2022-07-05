let out = document.getElementById('out');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let divide = document.getElementById('divide');
let multiply = document.getElementById('multiply');
let num1, num2;

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



