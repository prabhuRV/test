

var geheading=document.querySelector("#header")
import {headers} from "./components/headers.js"

geheading.innerHTML=headers()
var input_box=document.querySelector("#search-input");

input_box.addEventListener("keypress",()=>
{
    getData(event)
})
const getData=(e)=>
{
    if(e.code==='Enter')
    {
        let input=input_box.value
        console.log(input)
        profile(input)
    }
}

const profile=async (input)=>
{
let res=await fetch(`https://api.github.com/users/${input}/repos`);
let data=await res.json();
//console.log(data)
var image1=document.querySelector("#orginalpic");
image1.src=data[0].owner.avatar_url;
var image=document.querySelector("#profile-img");

image.src=data[0].owner.avatar_url;

appedData(data)

}

const appedData=(data)=>{
    console.log(data)
    var repository=document.querySelector("#profileName")
    var repository1=document.querySelector("#repos")
      repository1.innerHTML=null;
    data.map((ele)=>
    {
   
       var div1=document.createElement("div");
       div1.setAttribute("id","innerdiv");
     

    repository.innerText=ele.owner.login
    var title=document.createElement("h4");
 

    title.innerText=ele.name
    
div1.append(title)
repository1.append(div1)


    })

}