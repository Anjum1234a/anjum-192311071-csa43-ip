"use strict";
function page(id) {
    document.querySelectorAll("body > div").forEach(d => d.hidden = true);
    document.getElementById(id).hidden = false;
}
function login() {
    let name = document.getElementById("name").value;
    if (name == "doctor")
        page("doctorPanel");
    else if (name != "")
        page("home");
    else
        alert("Enter Username");
}
function logout() {
    page("login");
}
function msg(text) {
    alert(text);
}
