function page(id: string) {
    document.querySelectorAll("body > div").forEach(d =>
        (d as HTMLElement).hidden = true
    );
    document.getElementById(id)!.hidden = false;
}

function login() {
    let name = (document.getElementById("name") as HTMLInputElement).value;
    if (name == "doctor") page("doctorPanel");
    else if (name != "") page("home");
    else alert("Enter Username");
}

function logout() {
    page("login");
}

function msg(text: string) {
    alert(text);
}