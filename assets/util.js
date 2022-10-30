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
function setNav(id, root) {
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
        "        <a class=\"nav-link\" href=\"" + root + "\">Home</a>\n" +
        "      </li>\n" +
        "      <li class=\"nav-item\">\n" +
        "        <a class=\"nav-link\" href=\"" + root + "tickets/\">Tickets</a>\n" +
        "      </li>\n" +
        "      <li class=\"nav-item\">\n" +
        "        <a class=\"nav-link\" href=\"" + root + "schedule/\">Schedule</a>\n" +
        "      </li>\n" +
        "      <li class=\"nav-item\">\n" +
        "        <a class=\"nav-link\" href=\"" + root + "info/\">Practical Info</a>\n" +
        "      </li>\n" +
        "      <li class=\"nav-item\">\n" +
        "        <a class=\"nav-link\" href=\"" + root + "faq/\">FAQ</a>\n" +
        "      </li>\n" +
        "      <li class=\"nav-item\">\n" +
        "        <a class=\"nav-link\" href=\"" + root + "contact/\">Contact Us</a>\n" +
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

//make a bootstrap table based on content of a json file
function setTable(id, src) {
    //get json file
    let request = new XMLHttpRequest();
    request.open('GET', src, true);
    request.onload = function () {
        //get json object

        let data = JSON.parse(this.response).packages;
        console.log(data);
        let packages = [];
        for (let i in data) {
            packages.push(data[i]);
        }
        console.log(packages);
        //create table
        let content = "<table class=\"table table-striped\">\n" +
            "  <thead>\n" +
            "    <tr>\n" +
            "      <th scope=\"col\">#</th>\n" +
            "      <th scope=\"col\">Name</th>\n" +
            "      <th scope=\"col\">Price</th>\n" +
            "      <th scope=\"col\">Description</th>\n" +
            "    </tr>\n" +
            "  </thead>\n" +
            "  <tbody>";

        //loop through json object
        for (let i = 0; i < packages.length; i++) {
            console.log(packages[i]);
            content += "<tr>\n" +
                "      <th scope=\"row\">" + (i + 1) + "</th>\n" +
                "      <td>" + packages[i].display_name + "</td>\n" +
                "      <td>" + formatPrice(packages[i].price) + "</td>\n" +
                "      <td>" + packages[i].description_en + "</td>\n" +
                "<td><button onclick='addToCart(" + i + ",\"../input/tickets.json\")'>Add to cart</button></td>"
            "    </tr>";
        }
        //close table
        content += "</tbody>\n" +
            "</table>";
        console.log(content);
        //insert table into passed id
        document.getElementById(id).innerHTML = content;
    }
    //send request
    request.send();
}

//format number as price
function formatPrice(price) {
    return "$" + price.toFixed(2);
}

//add item to cart
function addToCart(index, src) {
    //get json file
    let request = new XMLHttpRequest();
    request.open('GET', src, true);
    request.onload = function () {
        //get json object
        let packages = [];
        let data = JSON.parse(this.response).packages;
        for (let i in data) {
            packages.push(data[i]);
        }
        console.log(packages);
        //add item to cart
        cart.push(packages[index]);
        //update cart
        updateCart(cart);
    }
    //send request
    request.send();
}

//update cart
function updateCart() {
    console.log(cart);
    //get cart div
    let cartDiv = document.getElementById("cart");
    //clear cart div
    cartDiv.innerHTML = "<h4>Cart</h4>";
    //loop through cart
    for (let i = 0; i < cart.length; i++) {
        //add item to cart div
        cartDiv.innerHTML += "<p>" + cart[i].display_name + " - " + formatPrice(cart[i].price) + "</p>";
    }
    //add total to cart div
    cartDiv.innerHTML += "<p>Total: " + formatPrice(getCartTotal()) + "</p>";
}

let cart = [];

function getCartTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }
    return total;
}