var slideIndex = 1;
// var timer = setInterval(function () {
//
// }, 1000)
var pt, items;
slideShow(slideIndex)

function slideShow(n) {
    var slides = $('.m-slideshow .slides')
    // console.log(slides);
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
    progressbar(slideIndex - 1)
    return slideIndex;
}

function move(n) {

    clearInterval(pt);
    items[slideIndex - 1].style.width = '0%';
    // slideIndex = 1
    // perv = -1 -> slide 0
    // slidexIndex = 1 + -1 = 0;
    slideIndex += n;
    // slideIndex = slideIndex + n;
    // console.log(' Plus ' + slideIndex);

    slideShow(slideIndex);
}

function progressbar(slideId) {
     items = document.getElementsByClassName('item-inner');
    var width = 0;
    pt = setInterval(timeLine, 30);

    function timeLine() {
        if (width >= 100) {
            clearInterval(pt);
            items[slideId].style.width = '0%';
            slideIndex++;
            slideIndex = slideShow(slideIndex);
        } else {
            width++;
            items[slideId].style.width = width + '%';

        }
    }
}