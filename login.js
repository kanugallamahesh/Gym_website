function loginUser(){

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    let savedUsername = localStorage.getItem("username");
    let savedPassword = localStorage.getItem("password");

    if(username === savedUsername && password === savedPassword){

        alert("Login Successful!");

        window.location.href = "index.html";

    }
    else{

        alert("Invalid Username or Password!");

    }
}