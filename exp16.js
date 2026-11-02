"use strict";
function show(message) {
    document.getElementById("result").innerHTML = message;
}
function register() {
    show("User Registered Successfully!");
}
function login() {
    show("User Login Successful!");
}
function postComplaint() {
    let complaint = document.getElementById("complaint").value;
    show("Complaint Submitted: " + complaint);
}
function locationMap() {
    window.open("https://www.google.com/maps", "_blank");
}
function viewStatus() {
    show("Complaint Status: Pending");
}
function feedback() {
    show("Thank you for your Feedback!");
}
function adminContact() {
    show("Admin Contact: admin@gmail.com");
}
function officerRegister() {
    show("Officer Registered Successfully!");
}
function officerLogin() {
    show("Officer Login Successful!");
}
function viewComplaint() {
    show("Displaying User Complaints");
}
function updateStatus() {
    show("Complaint Status Updated!");
}
function updateProof() {
    show("Proof of Work Uploaded Successfully!");
}
function generateID() {
    show("Officer ID: OFF101 | Password: 12345");
}
function createAccount() {
    show("Account Created Successfully!");
}
function deleteAccount() {
    show("Account Deleted Successfully!");
}
function viewAccounts() {
    show("Displaying All Accounts");
}
function changePassword() {
    show("Password Changed Successfully!");
}
function hideFeatures() {
    show("Features Hidden Successfully!");
}
