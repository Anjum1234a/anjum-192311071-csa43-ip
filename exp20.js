"use strict";
function page(id) {
    document.querySelectorAll("body > div").forEach(d => d.hidden = true);
    document.getElementById(id).hidden = false;
}
function login() {
    let name = document.getElementById("name").value;
    if (name == "admin") {
        page("admin");
    }
    else if (name != "") {
        page("home");
    }
    else {
        alert("Enter username");
    }
}
function logout() {
    page("login");
}
