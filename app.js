 let out = document.getElementById('out');
 let num1,num2,action;

let button = document.getElementById('button')
 

function func(){
num1=document.getElementById('n1').value
num1=parseInt(num1)
num2=document.getElementById('n2').value
num2=parseInt(num2)
action =document.getElementById('action').value

if(action === `+`){
    out.innerHTML= num1 + num2
}else if(action === `-`){
    out.innerHTML = num1 - num2
}else if(action === `/`){
    out.innerHTML = num1 / num2

}else if(action === `*`){
    out.innerHTML = num1 * num2

}else{
    alert(`error:no such action!`)
}


}


  
