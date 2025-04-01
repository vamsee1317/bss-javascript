// What are Forms ?
// Forms are used to collect userInput in webApplications.
// Javascript allows us to handle form submission, validate user inputs and provide feedback.

// Why do we js for forms ?
// prevents page reload on submission.
// validate inputs before sending data to the server.
// provide feedback to the user.
// Store user data in local/sessionStorage.

// Validations (Client vs server)

// PhonePe working nature in client & server.
// Client side validation
   // Check whether mobile is 10 digits

// Server side validation
    // Check whether mobile has phonepe account or not in the DB.


// Login form Validation without regex :


// document.getElementById("loginForm").addEventListener("submit", (event)=>{
//     event.preventDefault();

//     let userEmail = document.getElementById("userEmail").value;
//     let userPassword = document.getElementById("userPwd").value;
//     let emailError = document.getElementById("emailError");
//     let pwdError = document.getElementById("pwdError");

//     if(userEmail ==="" && userPassword ===""){
//         emailError.textContent = "Please enter your email";
//         emailError.style.color = "red";
//         pwdError.textContent = "Please enter your password";
//         pwdError.style.color = "red";

//     }else if(userEmail.length < 5 && userEmail.includes("@")){
//         emailError.textContent = "Please enter valid email";
//         emailError.style.color = "red";
//         pwdError.textContent = "";
//         pwdError.style.color = "red";
//     }

// })


// Regular Expressions :
// Regex is a pattern matching technique to validate the form inputs


// Login form Validation with regex :


// document.getElementById("loginForm").addEventListener("submit", (event)=>{
//     event.preventDefault();

//     let userEmail = document.getElementById("userEmail").value;
//     let userPassword = document.getElementById("userPwd").value;
//     let emailError = document.getElementById("emailError");
//     let pwdError = document.getElementById("pwdError");

//     // regex patterns

//     let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
//     let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

//     // Validate email

//     if(emailPattern.test(userEmail)){
//         emailError.textContent = "";
//     }else{
//         emailError.textContent = "Please enter valid email";
//         emailError.style.color = "red";
//     }
//     // Validate password

//     if(!passwordPattern.test(userPassword)){
//         pwdError.textContent = "Password should be at least 8 characters long and should contain at least one uppercase letter, one lowercase letter, one digit and one special character";
//         pwdError.style.color = "red";
//     }else{
//         pwdError.textContent = "";
//     }


// })


document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("userEmail");
    const passwordInput = document.getElementById("userPwd");
    const emailError = document.getElementById("emailError");
    const pwdError = document.getElementById("pwdError");
    const cPwd = document.getElementById("cPwd");
    const cPwdError = document.getElementById("cPwdError");

    loginForm.addEventListener("submit", function (event) {
        let isValid = true;
        emailError.textContent = "";
        pwdError.textContent = "";
        emailInput.classList.remove("error-border");
        passwordInput.classList.remove("error-border");

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const pwdPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        // Validate email
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = "Invalid email format.";
            emailInput.classList.add("error-border");
            isValid = false;
        }

        // Validate password
        if (!pwdPattern.test(passwordInput.value)) {
            pwdError.innerHTML = "Password must be:<br>• 8+ characters<br>• 1 uppercase & 1 lowercase<br>• 1 number & 1 special character";
            passwordInput.classList.add("error-border");
            isValid = false;
        }
        // Validate confirm password
        if (passwordInput.value !== cPwd.value) {
            cPwdError.textContent = "Passwords do not match.";
        }else{
            cPwdError.textContent = "";
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});
