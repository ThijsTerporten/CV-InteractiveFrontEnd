function sendMail(contactForm) {
    emailjs.send("gmail", "Thijs", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_address": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCES", reponse);
        },
        function(error) {
            console.log("FAILED", error);
        });
        return false;
}