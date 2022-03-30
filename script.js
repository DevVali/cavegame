// JavaScript main file

// build number
var build = 1.04;
var buildId = document.getElementById("build");

buildId.innerHTML = build;

// main variables
var body = document.querySelector("body");
var content = document.querySelector("#content");
var gameBox = document.querySelector("#game-box");
var username = "";

// show the game after a btn is pressed
document.querySelector("#play").addEventListener("click", startGame)
function startGame() {
    username = document.getElementById("input").value;
    if (username !== "") {
        body.style.backgroundColor = "white";
        content.classList.add("hide");
        gameBox.classList.remove("hide");
    } else {
        document.getElementById("message").innerHTML = "Please make sure to enter your username as first.";
    }
}

// back button
document.querySelector("#back").addEventListener("click", backToMain)
function backToMain() {
    body.style.backgroundColor = "#ed3491";
    content.classList.remove("hide");
    gameBox.classList.add("hide"); 
}

// arrow functions
var arrowUp = document.querySelector("#arrow-up");
var arrowLeft = document.querySelector("#arrow-left");
var arrowRight = document.querySelector("#arrow-right");
var arrowDown = document.querySelector("#arrow-down");