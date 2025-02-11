// Function to check password strength
function checkPasswordStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength++; // Minimum length
    if (password.match(/[A-Z]/)) strength++; // Uppercase letter
    if (password.match(/[a-z]/)) strength++; // Lowercase letter
    if (password.match(/[0-9]/)) strength++; // Number
    if (password.match(/[^a-zA-Z0-9\s]/)) strength++; // Special character (excluding spaces)

    if (strength >= 4) return "Strong";
    if (strength === 3) return "Medium";
    return "Weak";
}

// Event listener for password input field
document.getElementById("password").addEventListener("input", function() {
    let password = this.value;
    let strengthText = document.getElementById("strength");

    let strength = checkPasswordStrength(password); // Get strength level

    // Apply styles based on strength
    strengthText.innerText = strength;
    strengthText.style.color = (strength === "Strong") ? "green" : 
                               (strength === "Medium") ? "orange" : "red";
});

// Show Password Toggle
document.getElementById("show-password").addEventListener("change", function() {
    let passwordField = document.getElementById("password");
    passwordField.type = this.checked ? "text" : "password";
});
