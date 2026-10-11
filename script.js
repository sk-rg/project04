

const modeButton = document.getElementById("mode-switcher");

modeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        modeButton.textContent = "Dark Mode";
    } else {
        modeButton.textContent = "Light Mode";
    }
});




const contactForm = document.querySelector("#contact form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Thank you, " + name + "! Your form was checked successfully.");

    contactForm.reset();
});

