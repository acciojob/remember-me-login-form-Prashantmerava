//your JS code here. If required.

let form = document.getElementById("form");

let username = document.getElementById("username");
let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");

let existing = document.getElementById("existing");

// Check saved credentials when page loads
if (localStorage.getItem("username") &&
    localStorage.getItem("password")) {

    existing.style.display = "block";
}

// Form submission
form.addEventListener("submit", function(event) {

    event.preventDefault();

    let user = username.value;
    let pass = password.value;

    alert(`Logged in as ${user}`);

    if (checkbox.checked) {

        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);

        existing.style.display = "block";

    } else {

        localStorage.removeItem("username");
        localStorage.removeItem("password");

        existing.style.display = "none";
    }

});

// Existing user login
existing.addEventListener("click", function() {

    let savedUsername = localStorage.getItem("username");

    alert(`Logged in as ${savedUsername}`);

});
