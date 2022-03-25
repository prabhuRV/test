document.querySelector("#myform").addEventListener("submit", loginfun)
    var Singuparr=JSON.parse(localStorage.getItem("signup_data"))
function loginfun(event)
{

    event.preventDefault();
       let email=document.querySelector("#email").value;
       let password=document.querySelector("#pass").value;

       console.log(email,password)

var count=0;
for(var i=0;i<Singuparr.length;i++)
{
    //console.log(logUSer[i])
    if (Singuparr[i].email == email && Singuparr[i].password == password)
    {
        count++;
        break;
    }  
    
}
validateForm()
if(count>0)
{
    alert("Login successful");
    window.location.href="index.html"
}


}

function validateForm() {

    let email=document.querySelector("#email").value;
    let password=document.querySelector("#pass").value;

      if (email == "" || email == null) {
        alert("invalid Credentials");
        return false;
      }
      if (password == "" || password == null) {
        alert("invalid Credentials");
        return false;
      }
    
  }
  

  