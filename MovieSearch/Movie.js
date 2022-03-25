var movies=document.querySelector("#movies")
async function searchMovie()
{
    try{
      

        let input=document.querySelector("#query").value;
   
       
        let url=`https://www.omdbapi.com/?s=${input}&apikey=23ad7e60&i=tt0090190`
            let res=await fetch(url)

            let data=await res.json();
            return data.Search;
           // console.log(data)
        
        
    }
    catch(err){
        
    }
}







function appendData(data)
{
document.querySelector("#container").innerHTML=null
data.map(async function(ele,index)
{
var rating=await rat(ele.imdbID);

 // console.log(rating)


var divgalary=document.createElement("div");
divgalary.setAttribute("id","moviediv")


var divinfo=document.createElement("div");
divinfo.setAttribute("id","infodiv")

var img=document.createElement("img");
img.setAttribute("src",ele.Poster)
img.setAttribute("id","poster")


var divposter=document.createElement("div");
divposter.setAttribute("id","posterdiv")


var movienme=document.createElement("p");

movienme.innerText=ele.Title;
var movienme=document.createElement("p");

movienme.innerText=ele.Title;
//movies.append(movienme)

var movieType=document.createElement("p");

movieType.innerText=ele.Type;

var movierating=document.createElement("p");
var rating=await rat(ele.imdbID);


movierating.innerText="IMDb rating : "+rating+"/"+10;
movierating.style.color="green"


var realeseDate=document.createElement("p");

realeseDate.innerText="Date: "+ele.Year;




divposter.append(img)
divinfo.append(movienme,movieType,movierating,realeseDate)
divgalary.append(divposter,divinfo)
    document.querySelector("#container").append(divgalary);



});
}





async function rat(imdbID)
{


 var ratingdata;
 var ratingreun;
     try{
         let res=await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=23ad7e60&`);
         ratingdata=await res.json();
      console.log(ratingdata)
    
      ratingreun=call(ratingdata)
     
    let rates=ratingreun
    // console.log(rates)
     return rates;
    
 
     }
     catch(err)
     {
         console.log(err)
     }
   
}


function call(ratingdata)
{
let result= ratingdata.imdbRating

return result;
}




async function main()
{
    try{
    let data=await searchMovie()
    if(data===undefined)
    {
        return false
    }
    else
    {
    appendData(data)
    }

}
catch(err)
{
    console.log(err)
}
}






let timerid;
function debounce(func, delay)

{
    
    if(timerid)
    {
        clearTimeout(timerid);
    }
    timerid=setTimeout(function()
    {
        func();
    },delay)
    
}