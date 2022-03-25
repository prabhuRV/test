document.querySelector("#myform").addEventListener("submit", signupfun)
var Singuparr=JSON.parse(localStorage.getItem("signup_data"))||[];
function signupfun(event)
{
  
    event.preventDefault();

    var singupObj={
        name:document.querySelector("#name").value,
        moblieNo:document.querySelector("#mobnumber").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#pass").value

    }
   
    Singuparr.push(singupObj)
    localStorage.setItem("signup_data",JSON.stringify(Singuparr)) 
    validateForm()
}

function validateForm() {

    let name = document.querySelector("#name").value;
    let moblie=document.querySelector("#mobnumber").value;
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#pass").value;

    if (name == "" || name == null) {
      alert("Name must be filled out");
      return false;
    }
    if (moblie == "" || moblie == null) {
        alert("Moblie No must be filled out");
        return false;
      }

      if (email == "" || email == null) {
        alert("Email must be filled out");
        return false;
      }
      if (password == "" || password == null) {
        alert("Password must be filled out");
        return false;
      }
    
  }
  
