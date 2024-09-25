document.getElementById("registerForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const messageBox = document.getElementById("message");
    const spinner = document.getElementById("spinner");

    let error = "";
    let success = "";

    if (!email) {
        error = "Email is required.";
    } else if (password.length < 8) {
        error = "Password must be at least 8 characters.";
    } else if (password !== confirmPassword) {
        error = "Passwords do not match.";
    }

    if (error) {
        messageBox.textContent = error;
        messageBox.className = "alert alert-danger";
        messageBox.style.display = "block";
        return;
    }

    spinner.style.display = "block";

    try {
        const response = await fetch("http://127.0.0.1:8000/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        setTimeout(() => {
            spinner.style.display = "none";

            if (response.status === 201) {
                success = "Registration successful!";
            } else {
                error = "Registration failed.";
            }

            if (success) {
                messageBox.textContent = success;
                messageBox.className = "alert alert-success";
            } else if (error) {
                messageBox.textContent = error;
                messageBox.className = "alert alert-danger";
            }

            messageBox.style.display = "block";

        }, 3000);
    } catch (e) {
        spinner.style.display = "none";
        error = "An error occurred. Please try again.";
        messageBox.textContent = error;
        messageBox.className = "alert alert-danger";
        messageBox.style.display = "block";
    }
});