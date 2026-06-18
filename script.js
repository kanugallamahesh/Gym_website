// =========================
// BMI CALCULATOR
// =========================

function calculateBMI() {

    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    if (!weight || !height) {
        alert("Please enter weight and height");
        return;
    }

    height = height / 100;

    let bmi = weight / (height * height);

    let status = "";

    if (bmi < 18.5) {
        status = "Underweight ⚠️";
    } else if (bmi < 25) {
        status = "Healthy ✅";
    } else if (bmi < 30) {
        status = "Overweight ⚠️";
    } else {
        status = "Obese ❌";
    }

    document.getElementById("result").innerHTML =
        `Your BMI: <strong>${bmi.toFixed(2)}</strong><br>Status: ${status}`;
}


// =========================
// MEMBERSHIP REGISTRATION
// =========================

function joinGym() {

    let name = document.getElementById("memberName").value.trim();
    let phone = document.getElementById("memberPhone").value.trim();
    let plan = document.getElementById("memberPlan").value;

    if (name === "" || phone === "" || plan === "") {
        alert("Please fill all details");
        return;
    }

    if (phone.length < 10) {
        alert("Enter a valid phone number");
        return;
    }

    document.getElementById("joinResult").innerHTML =
        `✅ Welcome <strong>${name}</strong>! You selected the <strong>${plan}</strong> Plan.`;

    alert("🎉 Registration Successful!\nWelcome to FitZone Gym");

    document.getElementById("membershipForm").reset();
}


// =========================
// ATTENDANCE TRACKER
// =========================

function markAttendance() {

    let name = document.getElementById("attName").value.trim();

    if (name === "") {
        alert("Enter your name");
        return;
    }

    let today = new Date().toLocaleDateString();

    document.getElementById("attResult").innerHTML =
        `✅ Attendance marked successfully for <strong>${name}</strong><br>${today}`;

    document.getElementById("attName").value = "";
}


// =========================
// DARK / LIGHT MODE
// =========================

const toggle = document.getElementById("darkToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.checked = true;
}

toggle.addEventListener("change", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});


// =========================
// SCROLL ANIMATION
// =========================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

hiddenElements.forEach((el) => {
    observer.observe(el);
});


// =========================
// ACTIVE NAV LINK
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});


// =========================
// PAGE LOADER EFFECT
// =========================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


// =========================
// CONSOLE MESSAGE
// =========================

console.log("🏋️ FitZone Gym Website Loaded Successfully");