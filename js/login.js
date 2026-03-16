function login(event){

event.preventDefault();

const username = document.getElementById("username").value
const password = document.getElementById("password").value
const remember = document.getElementById("remember").checked

if(username === "admin" && password === "admin123"){

    if(remember){
        localStorage.setItem("isLoggedIn",true)
    }else{
        sessionStorage.setItem("isLoggedIn",true)
    }

    window.location.href = "dashboard.html"

}else{
    alert("Invalid Credentials")
}

}