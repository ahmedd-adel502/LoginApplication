//*HTML Elements
var homeLogin = document.querySelector("#homeLogin")
var loginButton = document.querySelector("#loginBtn")
var signupButton = document.querySelector("#signupBtn")
var loginPage = document.querySelector("#loginMenu")
var closeButton = document.querySelector("#closeBtn")
var emailInput = document.querySelector("#emailInput")
var passwordInput = document.querySelector("#passwordInput")
var mainLogin = document.querySelector("#innerLogin")
var rememberMe = document.querySelector("#rememberMe")
var userName= document.querySelector("#userName")


//^ Variables
var loginInfoList = JSON.parse(localStorage.getItem("logs")) || []
var currentPassword = ""
var currentEmail = ""

//& Functions
function getLoginMenu() {
    homeLogin.classList.add("d-none")
    loginPage.classList.remove("d-none")
}

function closeLoginMenu() {
    homeLogin.classList.remove("d-none")
    loginPage.classList.add("d-none")
}

function saveLoginInfo() {
    if(rememberMe.checked){
        var loginInfo = {
            email: emailInput.value,
            password: passwordInput.value,
        }
        loginInfoList.push(loginInfo)
        localStorage.setItem("logs", JSON.stringify(loginInfoList))
        localStorage.setItem("lastUser",JSON.stringify(loginInfo))
    }
}

function checkInfo() {
    currentPassword = passwordInput.value
    currentEmail = emailInput.value

    for (var i = 0; i < loginInfoList.length; i++) {
        if (
            loginInfoList[i].email === currentEmail &&
            loginInfoList[i].password === currentPassword
        ) {
            return true
        }
    }

    return false
}
function stayLogged() {
    var lastUser = JSON.parse(localStorage.getItem("lastUser"))

    if (lastUser) {
        for (var i = 0; i < loginInfoList.length; i++) {
            if (
                loginInfoList[i].email === lastUser.email &&
                loginInfoList[i].password === lastUser.password
            ) {
                window.open("welcome.html","_self")
                return
            }
        }
    }
}
stayLogged()

//! Events
loginButton.addEventListener("click", function () {
    getLoginMenu()
    var lastUser = JSON.parse(localStorage.getItem("lastUser"))
    if (lastUser) {
        emailInput.value = lastUser.email
    }
})

closeButton.addEventListener("click", function () {
    closeLoginMenu()
})

mainLogin.addEventListener("click", function (e) {
    e.preventDefault()

    if (checkInfo()) {
        saveLoginInfo()
        Swal.fire({
            title: "Logged In Successfully!",
            icon: "success"
        })

        setTimeout(() => {
            window.location.href = "welcome.html"
        }, 3000)
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password or Email is Incorrect!"
        })
    }
})


signupButton.addEventListener("click",function(){
    setTimeout(() => {
        window.open("signup.html","_self")
    },100)
})
