// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const project = document.getElementById("project").value;
    const message = document.getElementById("message").value;


    const phoneNumber = "917738235589";


    const whatsappMessage =
        `Hello Vikas Web Studio!

I want to discuss a website project.

Name: ${name}

Email: ${email}

Project Type: ${project}

Project Details:
${message}`;


    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    window.open(whatsappURL, "_blank");

});