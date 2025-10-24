/* Add your JavaScript to this file */
// Wait until the DOM is fully loaded
window.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.querySelector("#email");
    const messageDiv = document.querySelector(".message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload

        const email = emailInput.value.trim();

        if (email) {
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
        } else {
            messageDiv.textContent = "Please enter a valid email address.";
        }

        // Optional: clear the input after displaying the message
        emailInput.value = "";
    });
});
k