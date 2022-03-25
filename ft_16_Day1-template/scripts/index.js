//Store the generated number in LocalStorage with key "number".
var num = localStorage.getItem('number');
document.querySelector("#throw_dice").addEventListener("click",func)
function func() {
    var dicenum=Math.ceil(Math.random() *6);
   // console.log(dicenum)
        localStorage.setItem("number",dicenum);
        window.location.href="display.html"
  }
