//* HTML elements
var nameInput=document.querySelector("#nameInput")
var signUp= document.querySelector("#signUpForm")
var registerBtn = document.querySelector("#signUp")
var emailInput = document.querySelector("#emailInput")
var passwordInput = document.querySelector("#passwordInput")
var closeButton = document.querySelector("#closeBtn")
var userName= document.querySelector("#userName")
//!variables
var loginInfoList = JSON.parse(localStorage.getItem("logs")) || [];
var email;
//^ functions
function register(){
    email=emailInput.value.toLowerCase()
    if(mailChecking()){
        return false;
    }
    var loginInfo = {
        name:nameInput.value,
        email:emailInput.value,
        password:passwordInput.value
    }
    loginInfoList.push(loginInfo)
    localStorage.setItem("logs",JSON.stringify(loginInfoList))
    localStorage.setItem("username",nameInput.value)
    return true;
}
function backToHome(){
    window.open("index.html","_self")
}
function mailChecking(){
    for (var i=0;i<loginInfoList.length;i++){
        if(loginInfoList[i].email.toLowerCase()===email){
            Swal.fire({
                icon: "error",
                title: "Email Already Registered",
                text: "Please Try Different One!"
            })
            return true
        }
    }
    return false
}
//& events

registerBtn.addEventListener("click",function(){
    var nameValue=nameInput.value
    var emailValue=emailInput.value
    var passwordValue=passwordInput.value
    if(nameInput.value==null&&emailInput.value==null&&passwordInput.value==null){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No data Registered!"
        })
    } else if(nameRegex.test(nameValue)==false){
        Swal.fire({
            icon: "error",
            title: "Invalid Name",
            text: "Name Must be at least 3 letters!"
        })
    } else if(emailRegex.test(emailValue)==false){
        Swal.fire({
            icon: "error",
            title: "invalid Email",
            text: "Please enter a Valid Email!"
        })
    }else if(passwordRegex.test(passwordValue)==false){
        Swal.fire({
            icon: "error",
            title: "Weak Password",
            text: "Password Must be at least 6 letters and include a number and special character!"
        })
    }
    else{
        var lastCheck= register()
       if(lastCheck==true){
        Swal.fire({
            title: "Registered Successfully!",
            icon: "success"
        })
        setTimeout(()=>{
            window.open("index.html","_self")
        },3000)
       }
    }
})
closeButton.addEventListener("click",function(){
    backToHome()
})

//! Regex
var nameRegex = /^([A-Za-z]{3,})(\s+[A-Za-z]{2,})*$/;
var emailRegex = /^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}\.(com|net|org)$/;
var passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[#?!@$%^&*-]).{6,}$/;