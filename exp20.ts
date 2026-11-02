function page(id: string) {
    document.querySelectorAll("body > div").forEach(d =>
        (d as HTMLElement).hidden = true
    );

    document.getElementById(id)!.hidden = false;
}

function login() {
    let name = (document.getElementById("name") as HTMLInputElement).value;

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