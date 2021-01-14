function fadeOut(id, time) {
    var fadeTarget = document.getElementById(id);
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, time);
    setTimeout(function () {
        fadeTarget.parentNode.removeChild(fadeTarget);;
    }, time);
}

function sendEmail(event) {
    const emailForm = document.querySelector("#emailForm");
    var name = emailForm.elements.name;
    var email = emailForm.elements.email;
    var mailBody = emailForm.elements.message;

    if (name.value == "" || email.value == "" || mailBody.value == "") {
        document.getElementById("error").style.display = "inline-block";
        fadeOut("error", 3000);
    } else {
        var mailContent = "Name: " + name.value + ". \nEmail: " + email.value + ". \nMessage: " + mailBody.value;
        event.preventDefault();
        Email.send({
            SecureToken: "2fb6f6b2-bf99-4f1c-8400-18e8632fffd9",
            From: "prtflpersonal@gmail.com",
            To: "lehoangnhatduy2000@gmail.com",
            Subject: "Message From Portfolio",
            Body: mailContent
        }).then(function (message) {
            if (message == "OK") {
                document.getElementById("success").style.display = "inline-block";
                fadeOut("success", 3000);
                name.value = "";
                email.value = "";
                mailBody.value = "";
            } else {
                document.getElementById("failure").style.display = "inline-block";
                fadeOut("failure", 4000);
            }
        });
    }
}