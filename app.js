let out = document.getElementById('out');
let num1,num2,action;
let button = document.getElementById('button');

button.addEventListener('click', () => {
    num1=document.getElementById('n1').value;
    num1=parseInt(num1);
    num2=document.getElementById('n2').value;
    num2=parseInt(num2);
    action =document.getElementById('action').value;

    switch(action){
        case `+`:
            out.innerHTML = num1 + num2
            break;
        case `-`:
            out.innerHTML = num1 - num2
            break;
        case `/`:
            out.innerHTML = num1 / num2
            break;
        case `*`:
            out.innerHTML = num1 * num2
            break;
    }
});


  
