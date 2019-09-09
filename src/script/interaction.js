$(document).ready(main);
var enemigo3 = document.getElementById('enemigo3').style;
var enemigo1 = document.getElementById('enemigo1').style;
var enemigo2 = document.getElementById('enemigo2').style;
var enemigo4 = document.getElementById('enemigo4').style;
var enemigo5 = document.getElementById('enemigo5').style;

function main3() {
    enemigo3.top = parseInt(window.event.pageY + 5) + "px";
    enemigo3.left = parseInt(window.event.pageX + 5) + "px";
}

function main1() {
    enemigo1.top = parseInt(window.event.pageY + 5) + "px";
    enemigo1.left = parseInt(window.event.pageX + 5) + "px";
}

function main2() {
    enemigo2.top = parseInt(window.event.pageY + 5) + "px";
    enemigo2.left = parseInt(window.event.pageX + 5) + "px";
}

function main4() {
    enemigo4.top = parseInt(window.event.pageY + 5) + "px";
    enemigo4.left = parseInt(window.event.pageX + 5) + "px";
}

function main5() {
    enemigo5.top = parseInt(window.event.pageY + 5) + "px";
    enemigo5.left = parseInt(window.event.pageX + 5) + "px";
}