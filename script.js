

function swapInfo(direction){
    if(direction == "right"){
        let country = document.querySelector(".country");
        let abroad = document.querySelector(".abroad");
    }
}

var slide_strip = $('.infos');
var slides = slide_strip.find('> *');

var next = $('.btn-right');
var prev = $('.btn-left');

next.on('click', swapInfo.bind(null, 'next'));
prev.on('click',swapInfo);

function swapInfo(direction){
    var swap = parseInt(slide_strip.attr('data-swap'), 5);

    if(direction == 'next'){
            swap = Math.min(infos.length, swap + 1);
    } else {
            swap = Math.max(swap - 1, 0);
    }

    slide_strip.attr('data-swap', swap);
    };