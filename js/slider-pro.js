var timeLinePro = $('.slideshow-pro .timeline');
var slideShow1 = $('.slideshow-pro');
var slides1 = $('.slideshow-pro .slides');
// alert(slides.length)
var progress;
var wids = slides1.width();
window.addEventListener("resize", function(){
    wids = slides1.width();

});

var slideIndex1 = 1;
var timer1;
var wid = 0;
// clearInterval(slidesPlay);
// var slidesPlay = setInterval(function () {
//     slideIndex1++;
//     slideIndex1 = showSlide1(slideIndex1);
//     // clearInterval(timer1);
//
// }, 2000);

progressbar1(0)
// function showSlide1(n) {
//
//     if (slideIndex1 > slides.length) {
//         slideIndex1 = 1;
//     }
//     if (slideIndex1 < 1) {
//         slideIndex1 = slides.length;
//     }
//     //
//     // slides.hide();
//     // slides.eq(slideIndex1 - 1).show(0);
//
//     return slideIndex1;
// }
//
// function move(n) {
//     // next = 1
//     // alert(status)
//     // slideIndex1  =  1 , 2 ;
//     //slideIndex1  =  2 + 1 = 3
//     // prev = -1
//     //slideIndex1 = 6;
//     //slideIndex1  =  6 + -1 = 5
//     // items[slideIndex1 - 1].style.wid = '0%';
//     // console.log(items);
//     clearInterval(timer1);
//     // timeLinePro.css({"wid": wid + '%',});
//     slideIndex1 = slideIndex1 + n
//     showSlide1(slideIndex1);
//     // showSlide1(slideIndex1 - 1)
//     progressbar1(0)
// }


function progressbar1(w) {

    if (slideIndex1 > slides1.length) {
        slideIndex1 = 1;
    }

    wid = w;

    timer1 = setInterval(timeLine1, 20)

    function timeLine1() {
        if (wid >= 100) {
            clearInterval(timer1);
            slideIndex1++;
            progressbar1(0)
            showSlide1(slideIndex1 - 1)


        } else {
            wid++;
            $('.log').html(wid);
            timeLinePro.css({"width": wid + '%',});
        }
    }
}


function showSlide1(x) {
    progress = 0;
    for (var i = 1; i <= x; i++) {
        progress += wids;
    }
    slides1.css('transform', 'translateX(' + progress + 'px)');
}


slideShow1.hover(function () {

    clearInterval(timer1)

}, function () {
    clearInterval(timer1)
    // alert(wid);
    if (wid >= 0) {
        wid = wid;
        progressbar1(wid);
    }

});