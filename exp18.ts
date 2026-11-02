let balance = 0;

function page(id: string) {
    document.querySelectorAll("body > div").forEach(div => {
        (div as HTMLElement).hidden = true;
    });
    document.getElementById(id)!.hidden = false;
}

function login() {
    page("home");
}

function logout() {
    page("login");
}

function addMoney() {
    balance += Number((document.getElementById("money") as HTMLInputElement).value);
    document.getElementById("balance")!.innerHTML = "Balance: Rs." + balance;
}

function addCart() {
    document.getElementById("item")!.innerHTML = "Seeds Added to Cart!";
}

function addProduct() {
    alert("Product Added Successfully!");
}