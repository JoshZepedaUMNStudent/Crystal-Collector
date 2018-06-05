$(document).ready(function() {

var yourTotal = 0;
var wins = 0;
var losses = 0;    

var targetNumber = Math.floor(Math.random() * 101 + 19);
console.log(targetNumber);

var number1= Math.floor(Math.random() * 11 + 1);
var number2= Math.floor(Math.random() * 11 + 1);
var number3= Math.floor(Math.random() * 11 + 1);
var number4= Math.floor(Math.random() * 11 + 1);

$("#number").text(targetNumber);
$("#numberWins").text(wins);
$("#numberLosses").text(losses);


function reset() {
    targetNumber = Math.floor(Math.random() * 101 + 19);
    console.log(targetNumber);
    $("#number-card").text(targetNumber);
    number1 = Math.floor(Math.random() * 11 + 1);
    number2 = Math.floor(Math.random() * 11 + 1);
    number3 = Math.floor(Math.random() * 11 + 1);
    number4 = Math.floor(Math.random() * 11 + 1);
    yourTotal = 0;
}

function You_Win() {
    alert("You Win!");
        wins++;
        $("#numberWins").text(wins);
        reset();
}

function Oh_Well() {
    alert("Oh Well");
        losses++;
        $("numberLosses").text(losses);
        reset()
}

$("#gem1").click(function() {
    yourTotal = yourTotal + number1;
    $("score").text(yourTotal);
        if (yourTotal == targetNumber) {
            You_Win();
        }
        else if (yourTotal > targetRandom) {
            Oh_Well();
        }
}














});