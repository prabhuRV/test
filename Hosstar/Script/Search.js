
    async function searchMovie(url)
    {
        try{
            let input=document.querySelector("#query").value;
                let url=`https://api.themoviedb.org/3/search/movie?&api_key=7a2c71d372bbd659117f5f13841473a9&query=${input}`
            // let input=document.querySelector("#query").value;
       
           

                let res=await fetch(url)

                let data=await res.json();
               // console.log(data.results)
               // appendData(data.results)
              // appendData1(data.results)
                 return data.results;
        }
        catch(err){
            console.log(err)
        }
    }

 
 
var image_Url='https://image.tmdb.org/t/p/w500'


function displaData(data)
{
    console.log(data)
    document.querySelector("#moviesbyme").innerHTML=null;
    data.map(function(ele,index)
{
 
  
    var divgalary=document.createElement("div");
    divgalary.setAttribute("id","moviediv")
    

    var divinfo=document.createElement("div");
   divinfo.setAttribute("id","infodiv")
   
    var img=document.createElement("img");
    img.setAttribute("src", image_Url+ele.poster_path);
    img.setAttribute("id","poster");


    var divposter=document.createElement("div");
    divposter.setAttribute("id","posterdiv")

    
   let movieName=document.createElement("p")
   movieName.innerText="Movie Name:"+ele.title


   let btn=document.createElement("button");
   btn.innerText="View"
   btn.addEventListener("mouseover",function()
   {
      var dro= showdeaitls(ele.overview)
      btn.innerText=dro
   });




   var realeseDate=document.createElement("p");
 

 realeseDate.innerText="Date: "+ele.release_date;
//movies.append(movienme)

var movierating=document.createElement("p");
movierating.innerText="IMDb rating : "+ele.vote_average+"/"+10;
    movierating.style.color="green"
    
   divposter.append(img)
   divinfo.append(movierating,movieName,realeseDate,btn)


   divgalary.append(divposter,divinfo)
        document.querySelector("#moviesbyme").append(divgalary);

    
  
});
}

function showdeaitls(det)
{
   
   
console.log(det)
return det;
  
}





   async function main()
    {
        try{
            
        let data=await searchMovie()
        // console.log(data)
        
        if(data==undefined)
        {
            return false
        }
      
 displaData(data)
        
    
    }
    catch(err)
    {
        console.log(err)
    }
    }





 let timerid;

    function debounce(func, delay)

    {
      
      
        console.log(timerid)
        if(timerid)
        {
            clearTimeout(timerid);
        }
        
         timerid=setTimeout(function()
        {
            func();
        },delay)
        
    
}