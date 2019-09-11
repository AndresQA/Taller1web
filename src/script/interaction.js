$(document).ready(main);
var enemigo1 = document.getElementById('enemigo1').style;
var enemigo2 = document.getElementById('enemigo2').style;
var enemigo3 = document.getElementById('enemigo3').style;
var enemigo4 = document.getElementById('enemigo4').style;
var enemigo5 = document.getElementById('enemigo5').style;

function main3() {
    enemigo3.top = parseInt(window.event.clientY - 220) + "px";
    enemigo3.left = parseInt(window.event.clientX + 5) + "px";
}

function main1() {
    enemigo1.top = parseInt(window.event.clientY - 220) + "px";
    enemigo1.left = parseInt(window.event.clientX + 5) + "px";
}

function main2() {
    enemigo2.top = parseInt(window.event.clientY - 220) + "px";
    enemigo2.left = parseInt(window.event.clientX + 5) + "px";
}

function main4() {
    enemigo4.top = parseInt(window.event.clientY - 220) + "px";
    if(window.event.clientX+300 > innerWidth){
        enemigo4.left = parseInt(window.event.clientX - 295) + "px";
    }
    else{
        enemigo4.left = parseInt(window.event.clientX + 5) + "px";
    }
}

function main5() {
    enemigo5.top = parseInt(window.event.clientY - 220) + "px";
    if(window.event.clientX+300 > innerWidth){
        enemigo5.left = parseInt(window.event.clientX - 295) + "px";
    }
    else{
    }

}

var contador = 1;

function main(){
$('.mainnav__logoimg').click(function(){
   
    if (contador==1) {
        $('nav').animate({
            left: '0'
        })
        contador = 0;
    }else{
        contador = 1;
        $('nav').animate({
            left: '-100%'
        })
    }
    
});
$('ul').click(function(){
    contador = 1;
    $('nav').animate({
        left: '-100%'
    })
});

};


function handleLoad() {
    var button = document.querySelector('button');
    var slider = document.querySelector('.explorer__slider');
    var tape = slider.querySelector('.explorer__slidertape');
    var count = 0;
    
    var first = tape.querySelector('.slider__img');
    var newLast = document.createElement('img');
    newLast.setAttribute('src', first.getAttribute('src'));
    //newLast.setAttribute('class', first.getAttribute('class'));
    newLast.classList.add('slider__img');
    tape.append(newLast);
    
    function handleLast(){
        console.log('cambio');

        tape.classList.add('explorer__slidertape--inactive');
        tape.style.transform = 'translate(0px, 0px)';
    }
    
    function handleClick(event) {
        count++;
    
        if(count == 1){
            tape.classList.remove('explorer__slidertape--inactive');
        }
    
        var mov = slider.offsetWidth * -1 * count;
        tape.style.transform = 'translate(' + mov + 'px, 0px)';
        
        if(count > tape.childElementCount - 2){
            setTimeout(handleLast, 300);
            count = 0;
        }
    }
    
    if(button.addEventListener('click', handleClick)){
        console.log("hola");

    }
    
}

window.addEventListener('load', handleLoad);