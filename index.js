document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const query = document.getElementById("query").value;
        const workWithYou = document.getElementById("workWithYou").checked;

        
        // For demonstration, we will log it to the console.
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Query:", query);
        console.log("Work with you:", workWithYou);

        // Optionally, you can show a success message or reset the form
        alert("Thank you for contacting me! I will get back to you shortly.");
        contactForm.reset();
    });
});
