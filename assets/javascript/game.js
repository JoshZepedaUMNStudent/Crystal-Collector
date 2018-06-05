$(document).ready(function() {

var randomNum = Math.floor(Math.random() * 102 + 19);

$("#targetNum").text(randomNum);

var num1 = Math.floor(Math.random() * 12 + 1);
var num2 = Math.floor(Math.random() * 12 + 1);
var num3 = Math.floor(Math.random() * 12 + 1);
var num4 = Math.floor(Math.random() * 12 + 1);

var playerTotal = 0;
var wins = 0;
var losses = 0;

$("#numWins").text("Wins: " + wins);
$("#numLosses").text("Losses: " + losses);

function reset() {
    randomNum = Math.floor(Math.random() * 102 + 19);
    console.log(randomNum);
    $("#targetNum").text(randomNum);
    num1 = Math.floor(Math.random() * 12 + 1);
    num2 = Math.floor(Math.random() * 12 + 1);
    num3 = Math.floor(Math.random() * 12 + 1);
    num4 = Math.floor(Math.random() * 12 + 1);
    playerTotal = 0;
    $("#score").text(playerTotal);
}

function Winner() {
    alert("You Won!");
    wins++;
    $("#numWins").text("Wins: " + wins);
    reset();
}

function Loser() {
    alert ("You Lose!");
    losses++;
    $("#numLosses").text("Losses: " + losses);
    reset();
}

$("#gem1").on("click", function() {
    playerTotal = playerTotal + num1;
    console.log(playerTotal);
    $("#score").text(playerTotal);
    if (playerTotal === randomNum) {
        Winner()
    } else if (playerTotal > randomNum) {
        Loser()
    }
});

$("#gem2").on("click", function() {
    playerTotal = playerTotal + num2;
    console.log(playerTotal);
    $("#score").text(playerTotal);
    if (playerTotal === randomNum) {
        Winner()
    } else if (playerTotal > randomNum) {
        Loser()
    }
});

$("#gem3").on("click", function() {
    playerTotal = playerTotal + num3;
    console.log(playerTotal);
    $("#score").text(playerTotal);
    if (playerTotal === randomNum) {
        Winner()
    } else if (playerTotal > randomNum) {
        Loser()
    }
});

$("#gem4").on("click", function() {
    playerTotal = playerTotal + num4;
    console.log(playerTotal);
    $("#score").text(playerTotal);
    if (playerTotal === randomNum) {
        Winner()
    } else if (playerTotal > randomNum) {
        Loser()
    }
});


});