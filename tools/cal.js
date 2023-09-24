console.log("hi");

//const name='1';

function insert(num)   
{  
document.caltext.value = caltext.value += num;  
}  

function equal()
{
var exp = caltext.value;
if(exp)
{
caltext.value = eval(exp)
}
}


function backspace()  
{  
var exp = caltext.value;  
caltext.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */  
}  

