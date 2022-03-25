document.querySelector("#myform").addEventListener("submit",myfun)
var arr=JSON.parse(localStorage.getItem("stude"))||[];
function myfun(event)
{
    event.preventDefault();

    var name=document.querySelector("#name").value;
    var number=document.querySelector("#num").value;
    var city=document.querySelector("#city").value;
    

    function studentDetail(nam,number,ci)
    {
        this.name=nam;
        this.number=number;
        this.city=ci;
    }

    var stu=new studentDetail(name,number,city)
    console.log(stu)
    arr.push(stu)
   localStorage.setItem("stude",JSON.stringify(arr))
   window.location.href="display.html"
}