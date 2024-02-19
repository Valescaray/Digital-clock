var Hrs = document.getElementById("hrs");
var Mins = document.getElementById("min");
var Secs = document.getElementById("sec");




setInterval(function() {
    var current = new Date();

    Hrs.innerHTML = (current.getHours() < 10 ? "0" : "" ) + current.getHours();
    Mins.innerHTML = (current.getMinutes() < 10 ? "0" : "" ) + current.getMinutes();
    Secs.innerHTML = (current.getSeconds() < 10 ? "0" : "" ) + current.getSeconds();

}, 1000)