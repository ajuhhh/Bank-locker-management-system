// Predefined credentials
const validUsername = "aji";
const validPassword = "0612";

// Handle form submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get user inputs
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate credentials
    if (username === validUsername && password === validPassword) {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").textContent = "Login successful! Redirecting...";
        
        // Simulate a redirect to another page
        setTimeout(() => {
            window.location.href = "banknav.html"; // Replace with your actual page name
        }, 2000);
    } else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").textContent = "Invalid username or password.";
    }
});
