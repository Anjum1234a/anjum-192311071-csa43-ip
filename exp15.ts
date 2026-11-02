function register() {
    document.getElementById("result")!.innerHTML =
        "Registration Successful!";
}

function login() {
    document.getElementById("result")!.innerHTML =
        "Login Successful!";
}

let balance: number = 0;

function addMoney() {
    let amount = Number((document.getElementById("money") as HTMLInputElement).value);
    balance += amount;

    document.getElementById("result")!.innerHTML =
        "Wallet Balance: Rs. " + balance;
}

function buyTicket() {
    document.getElementById("result")!.innerHTML =
        "Toll Ticket Purchased Successfully!";
}

function applyPass() {
    document.getElementById("result")!.innerHTML =
        "Toll Pass Application Submitted!";
}

function showQR() {
    document.getElementById("result")!.innerHTML =
        "Your QR Code: EASYTOLL123";
}

function adminLogin() {
    document.getElementById("result")!.innerHTML =
        "Admin Login Successful!";
}

function createToll() {
    document.getElementById("result")!.innerHTML =
        "Toll Details Created!";
}

function scanQR() {
    document.getElementById("result")!.innerHTML =
        "QR Code Scanned Successfully!";
}

function verifyPass() {
    document.getElementById("result")!.innerHTML =
        "Toll Pass Verified!";
}