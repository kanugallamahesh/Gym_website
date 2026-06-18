function registerUser(){

    let username = document.getElementById("regUsername").value.trim();

    let password = document.getElementById("regPassword").value.trim();

    let confirmPassword =
    document.getElementById("regConfirmPassword").value.trim();

    if(username === "" || password === ""){

        alert("Please fill all fields");
        return;

    }

    if(password !== confirmPassword){

        alert("Passwords do not match");
        return;

    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration Successful!");

    window.location.href = "login.html";
}