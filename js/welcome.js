//*HTML elements
var userName= document.querySelector("#userName")
//^ variables
var loginInfoList = JSON.parse(localStorage.getItem("logs")) || []
var logoutBtn= document.querySelector("#logoutBtn")

if (localStorage.getItem("logs",JSON.stringify(loginInfoList))){
    JSON.parse(localStorage.getItem("logs"))
    userName.innerHTML=loginInfoList[0].name
}

//& functions
function logOut(){
    localStorage.removeItem("lastUser")
    setTimeout(()=>{
        window.open("index.html","_self")
    },1500)
}

//! events

logoutBtn.addEventListener("click",function(){
    logOut()
})