document.getElementById("password").addEventListener("input", function() {
    let password = this.value;
    let strengthText = document.getElementById("strength");

    let strength = 0;
    if (password.length > 7) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[\W]/)) strength++;

    switch (strength) {
        case 0:
        case 1:
            strengthText.innerText = "Weak";
            strengthText.style.color = "red";
            break;
        case 2:
            strengthText.innerText = "Medium";
            strengthText.style.color = "orange";
            break;
        case 3:
        case 4:
            strengthText.innerText = "Strong";
            strengthText.style.color = "green";
            break;
    }
});
// Show Password Toggle
document.getElementById("show-password").addEventListener("change", function() {
    let passwordField = document.getElementById("password");
    passwordField.type = this.checked ? "text" : "password";
});