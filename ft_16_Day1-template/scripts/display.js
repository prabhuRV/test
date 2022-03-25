//here retrieve the generated number from Localstorage.
var num = localStorage.getItem('number');
console.log(num)
if(num==6)
{
 
    
document.querySelector("#show_number").innerText=num;

document.querySelector("#show_number").style.color = "green";
}
else if(num==1)
{
    document.querySelector("#show_number").innerText=num;

document.querySelector("#show_number").style.color = "yellow";
  
}
else
{
    document.querySelector("#show_number").innerText=num;
    var numm=document.querySelector("#show_number").style.color = "red";

}
//display data automatically reload
//window.location.reload();