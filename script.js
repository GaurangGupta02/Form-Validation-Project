function validateForm() {
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (fullName.length < 5) {
        document.getElementById("fullNameError").innerHTML = "Enter a valid full name";
        return false;
    }
    if (!email.includes("@")) {
        document.getElementById("emailError").innerHTML = "Enter a valid email ID";
        return false;
    }
    if (phone === "123456789" || phone.length !== 10) {
        document.getElementById("phoneError").innerHTML = "Enter a valid phone number";
        return false;
    }
    if (password === "password" || password === fullName || password.length < 8) {
        document.getElementById("passwordError").innerHTML = "Password is not strong";
        return false;
    }
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match";
        return false;
    }
    return true;
}
document.getElementById("myForm").addEventListener("submit", function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});
document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
});