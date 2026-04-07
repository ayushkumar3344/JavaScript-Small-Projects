let input = document.getElementById("input");
let button = document.querySelector(".btn");
let copyIcon = document.querySelector(".fa-copy");
let alertBox = document.querySelector(".alert-container");

// Ye sab characters hain jo password me use honge
let allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

// Ye function password banata hai
function createPassword() {
    let password = "";        // empty password
    let length = 10;          // password ki length

    for (let i = 0; i < length; i++) {
        // random index nikalo
        let randomNum = Math.floor(Math.random() * allChars.length);

        // us index ka character add karo
        password = password + allChars[randomNum];
    }

    // input box me password show karo
    input.value = password;
}

// Button click → password generate
button.addEventListener("click", function () {
    createPassword();
});

// Copy icon click → copy password
copyIcon.addEventListener("click", function () {

    // agar password empty hai
    if (input.value === "") {
        alert("Pehle password generate karo!");
    } else {
        // copy to clipboard
        navigator.clipboard.writeText(input.value);

        // alert show karo
        alertBox.classList.add("active");

        // 2 second baad hide
        setTimeout(function () {
            alertBox.classList.remove("active");
        }, 2000);
    }
});