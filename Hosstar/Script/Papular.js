async function papualarMovie(url)
    {
        try{
          

            // let input=document.querySelector("#query").value;
       
           

                let res=await fetch(url)

                let data=await res.json();
                //console.log(data.results)
               // appendData(data.results)
               appendData1(data.results)
                return data.results;
        }
        catch(err){
            console.log(err)
        }
    }

   papualarMovie(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7a2c71d372bbd659117f5f13841473a9`)
 
var image_Url='https://image.tmdb.org/t/p/w500'



function appendData1(data)
{
  
    data.map(function(ele,index)
{

  
    // var divgalary=document.createElement("div");
    // divgalary.setAttribute("id","moviediv")
    

  
   
    var img=document.createElement("img");
    img.setAttribute("class","w3-image");
    img.setAttribute("src", image_Url+ele.poster_path);
    // img.setAttribute("class","w3-image");
 
  

   // divgalary.append(img)
        document.querySelector(".Papularmovies").append(img);
})
}




var movieposter=[];

    mov1="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9996/1129996-h-5539be3af21f";
    mov2="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2732/1122732-h-e1113b315b96";
    mov3="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4364/1094364-h-f8cc4f84b6d7"
    mov4="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4798/1124798-h-a389bcd35939"



movieposter.push(mov1)
movieposter.push(mov2)
movieposter.push(mov3)
movieposter.push(mov4)
//console.log(movieposter)
let slideshow=document.querySelector("#slideshow")

let i=0;
slideshow.innerHTML=null;
let img=document.createElement("img")
img.setAttribute("id","sliderimg")
img.src=movieposter[0];
slideshow.append(img);
setInterval(function()
{
    if(i===movieposter.length)
    {
        i=0;
    }
    let image=movieposter[i];
    slideshow.innerHTML=null;
    let div1=document.createElement("div")
    div1.setAttribute("class","w3-animate-right")

    let img=document.createElement("img")
img.setAttribute("id","sliderimg")
img.src=image;
div1.append(img);
slideshow.append(div1);
i++;


},3000);


