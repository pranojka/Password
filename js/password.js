$("#target").ready(function() {

    var upercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var caracterlenght = 8;
    var specilacaracter = "!@#$%^&*?_~";
    var number = "0123456789";


    if (("$pass").value.match(upesrcase)) {

        etter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }


})