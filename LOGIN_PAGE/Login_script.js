// script.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Work In Progress!!!!!");
        });
    } else {
        console.error("loginForm not found in the DOM.");
    }
});
