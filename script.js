document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("leadForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let country = document.getElementById("country").value;

        // Validation rules
        if (name === "") {
            alert("Please enter your name.");
            return;
        }
        
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!validatePhone(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        if (country === "") {
            alert("Please select a preferred country.");
            return;
        }

        // If all validations pass
        alert("Form submitted successfully!");
        form.reset(); // Clear form fields after submission
    });

    // Function to validate email
    function validateEmail(email) {
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    // Function to validate phone number (10-digit format)
    function validatePhone(phone) {
        let phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    }
});
