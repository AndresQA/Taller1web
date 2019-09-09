$(document).ready(main);

var contador = 1;

function main(){
$('.mainnav__logoimg').click(function(){
   
    if (contador==1) {
        $('nav').animate({
            left: '0'
        })
        contador = 0;
        window.onwheel = null;         
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