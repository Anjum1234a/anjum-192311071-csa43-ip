function page(id: string) {
    let pages = ["login", "admin", "user", "vote", "results"];

    pages.forEach(p => {
        document.getElementById(p)!.style.display = "none";
    });

    document.getElementById(id)!.style.display = "block";
}

function login() {
    let id = (document.getElementById("voter") as HTMLInputElement).value;

    if (id == "") {
        alert("Enter Voter ID");
    }
    else if (id.toLowerCase() == "admin") {
        page("admin");
    }
    else {
        page("user");
    }
}

function show(message: string) {
    document.getElementById("result")!.innerHTML = message;
    alert(message);
}

function submitVote() {
    let candidate = (document.getElementById("candidate") as HTMLSelectElement).value;

    document.getElementById("voteMsg")!.innerHTML =
        "Your vote for " + candidate + " submitted successfully!";
}

function logout() {
    page("login");
}