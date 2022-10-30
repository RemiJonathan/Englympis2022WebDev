//homepage jumbotron html
function setJumbotron(id, content, date) {

    content = "<div class=\"jumbotron jumbotron-fluid jumbotron-background\">\n" +
        "      <div class=\"container\">\n" +
        "        <h1 class=\"display-4\">Welcome to the Potato Cloud Festival</h1>\n" +
        "        <h1 class=\"display-5\"><div class=\"countdown\" id='countdown'></div></h1>\n" +
        "        <p class=\"lead\">" +
        content +
        "        </p>\n" +
        //countdown until event
        "        <div class=\"countdown\" id='countdown'></div>\n" +
        "    </div>";
    //insert code into passed id
    document.getElementById(id).innerHTML = content;
}

function setLogo(id, src) {
    //insert logo into passed id
    document.getElementById(id).innerHTML = "<img src=\"" + src + "\" class=\"img-fluid\" alt=\"Responsive image\">";
}

//create nav menu
function setNav(id, content) {
    //Tickets
    // Programmation
    // Practical info
    // FAQ
    // Contact Us
    content = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n" +
        "  <a class=\"navbar-brand\" href=\"#\">&nbsp;&nbsp;&nbsp;PCF</a>\n" +
        "  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n" +
        "    <span class=\"navbar-toggler-icon\"></span>\n" +
        "  </button>\n" +
        "  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n" +
        "    <ul class=\"navbar-nav mr-auto\">\n" +
        "      <li class=\"nav-item\">\n" +
        "        <a class=\"nav-link\" href=\"./\">Home</a>\n" +
        "      </li>\n" +
        "      <li class=\"nav-item\">\n" +
        "        <a class=\"nav-link\" href=\"tickets/\">Tickets</a>\n" +
        "      </li>\n" +
        "      <li class=\"nav-item\">\n" +
        "        <a class=\"nav-link\" href=\"schedule/\">Schedule</a>\n" +
        "      </li>\n" +
        "      <li class=\"nav-item\">\n" +
        "        <a class=\"nav-link\" href=\"info/\">Practical Info</a>\n" +
        "      </li>\n" +
        "      <li class=\"nav-item\">\n" +
        "        <a class=\"nav-link\" href=\"faq/\">FAQ</a>\n" +
        "      </li>\n" +
        "      <li class=\"nav-item\">\n" +
        "        <a class=\"nav-link\" href=\"contact/\">Contact Us</a>\n" +
        "      </li>\n" +
        "    </ul>\n" +
        "  </div>\n" +
        "</nav>";
    //insert code into passed id
    document.getElementById(id).innerHTML = content;
}

//display months, days , hours, minutes, seconds until date
function setCountdown(date) {
    // Set the date we're counting down to
    var countDownDate = new Date(date).getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("countdown").innerHTML = days + " days " + hours + " hours "
            + minutes + " minutes " + seconds + " seconds! ";

        // If the countdown is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Ongoing!";
        }
    }, 1000);
}