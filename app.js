 let out = document.getElementById('out');
 let num1,num2;

function plus() {
    num1 = document.getElementById('n1').value; 
    num1 = parseInt(num1)
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2)
    
    out.innerHTML = num1 + num2;
   }

   function minus() {
    num1 = document.getElementById('n1').value; 
    num1 = parseInt(num1)
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2)
    
    out.innerHTML = num1 - num2;
   }

   function multiply(){
    num1 = document.getElementById('n1').value; 
    num1 = parseInt(num1)
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2)

    out.innerHTML = num1 * num2;

   }
   function divide(){
    num1 = document.getElementById('n1').value; 
    num1 = parseInt(num1)
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2)

    out.innerHTML = num1 / num2;

   }


  
