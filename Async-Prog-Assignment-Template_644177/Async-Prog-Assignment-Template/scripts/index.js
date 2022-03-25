var movieposter=[];

    mov1="https://www.unchartedmovie.com/images/share.jpg";
    mov2="https://www.tollywood.net/wp-content/uploads/2021/11/Fan-presents-slippers-to-Pawan-Kalyan-its-connection-with-Bheemla-Nayak.jpg";
    mov3="https://www.thetelugufilmnagar.com/wp-content/uploads/2021/11/Ee-Rathale.png"
    mov4="https://www.cinejosh.com/newsimg/newsmainimg/rrr-second-trailer_b_0603220952.jpg"



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


// var btn=document.createElement("button");
// btn.innerText=""
// btn.setAttribute("id","btl")
//  btn.addEventListener("click", function () {
//     addtocart()
// })
// document.querySelector("#sort-buttons").append(btn);







function moviesdatabase(image_url,movname,rating,type,date)
{

    this.image=image_url;
    this.movieName=movname;
    this.rating=rating;
    this.movieType=type;
    this.realeseDate=date;
};


var bhimObj=new moviesdatabase("https://upload.wikimedia.org/wikipedia/en/a/ad/Jai_Bhim_film_poster.jpg","BHIM",9,"Drama","10-Dec-2021");
//console.log(bhimObj);
var bheemlaObj=new moviesdatabase("https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODAlICAxODNrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00313209-nuwhbnyqts-portrait.jpg","BHEEEMLA NAYAK",9.5,"Biography","25-Feb-2022");
var gangubai=new moviesdatabase("https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/gangubai-kathiawadi-et00114897-22-02-2022-01-07-14.jpg","Gangubai Kathiawadi",8.2,"Biography,Crime,Drama","25-Feb-2022");
var pawankhind=new moviesdatabase("https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pawankhind-et00307433-17-01-2022-05-27-05.jpg","Pavan khind",8.0,"Action,Drama,Historical","18-Feb-2022");
var batman=new moviesdatabase("https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-batman-et00129624-31-01-2022-02-23-17.jpg","Batman",8.4,"Action,Adventure,Crime","04-March-2022");
var avmj=new moviesdatabase("https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/aadavallu-meeku-johaarlu-et00316317-28-02-2022-09-12-30.jpg","Adavalaku meku johar lu",8.0,"Comedy,Family","18-Feb-2022");
var Uncharted=new moviesdatabase("https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/uncharted-et00311712-22-02-2022-07-05-40.jpg","Uncharted",7.9,"Action,Adventure,Thirllar","18-Feb-2022");
var rrr=new moviesdatabase("https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/rrr-et00094579-27-07-2021-11-33-17.jpg","RRR",9.8,"Action,Drama,Historical","25-March-2022");
var radheSham=new moviesdatabase("https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/radhe-shyam-et00135230-07-03-2022-04-16-56.jpg","Radhe Shyam",8.3,"Action,Drama,Historical","11-March-2022");


var moviedetail=[];

moviedetail.push(bhimObj,bheemlaObj,gangubai,pawankhind,batman,avmj,Uncharted,rrr,radheSham)
// moviedetail.push(bheemlaObj)
// moviedetail.push(gangubai)
// moviedetail.push(pawankhind)
// moviedetail.push(batman)
// moviedetail.push(avmj)
// moviedetail.push(Uncharted)
// moviedetail.push(rrr)
// moviedetail.push(radheSham)

console.log(moviedetail)
show(moviedetail)
function show(moviedetail)
{
    var par=document.querySelector("#movies")
    par.innerHTML=null;
moviedetail.map(function(ele,index)
{
    var divgalary=document.createElement("div");
    divgalary.setAttribute("id","moviediv")

    var img=document.createElement("img");
    img.setAttribute("src",ele.image)
    img.setAttribute("id","poster")


    var divposter=document.createElement("div");
    divposter.setAttribute("id","posterdiv")
    var movienme=document.createElement("p");

    movienme.innerText=ele.movieName;

    var movieType=document.createElement("p");

    movieType.innerText=ele.movieType;

    var movierating=document.createElement("p");

    movierating.innerText="IMDb rating : "+ele.rating+"/"+10;
    movierating.style.color="green"

    var realeseDate=document.createElement("p");

    realeseDate.innerText="Date: "+ele.realeseDate;
    


   

    
   var divinfo=document.createElement("div");
   divinfo.setAttribute("id","infodiv")

   divposter.append(img)
   divinfo.append(movienme,movieType,movierating,realeseDate)
   divgalary.append(divposter,divinfo)
        document.querySelector("#movies").append(divgalary);


        localStorage.setItem("movies",JSON.stringify(moviedetail))
});
}

document.querySelector("#sort-hl").addEventListener("click",function()
{
    funsor()  
});
function funsor()
{
    var sorting=document.querySelector("#sort-hl").id
    // console.log(sorting)
if(sorting=='sort-hl'){
    moviedetail.sort(function(a,b){
        return b.rating- a.rating;
    });
   
}
show(moviedetail);
}
document.querySelector("#sort-lh").addEventListener("click",function()
{
    funsort()  
});
function funsort()
{
    var sorting=document.querySelector("#sort-lh").id
    // console.log(sorting)
if(sorting=='sort-lh'){
    moviedetail.sort(function(a,b){
       
        return a.rating- b.rating;
    });
   
}
show(moviedetail);
}