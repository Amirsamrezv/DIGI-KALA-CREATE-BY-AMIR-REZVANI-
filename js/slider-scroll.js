// var setWidth = $('.slider-scroll .slides').width('20%');
// $('.slider-scroll1 .slides').width('20%');

function sliderScroll(btns, self) {
    var self = $(self);
    // console.log(self);
    var slider = self.parent();
    // console.log(slider);
    var slide = slider.find('.slide');
    //  setWidth = slider.find('.slides').width(w);
    console.log(slide);
    var slides = slide.find('.slides');
    console.log(slides);
    var slideWidth = slide.width();
    console.log(slideWidth);
    var slidesWidth = slides.width();
    var slidesLen = slides.length;
    var transform = slide.position().left;
    var calcSlides = Math.floor(slideWidth / slidesWidth);
    console.log('calcSlides' + calcSlides)
    var dd = slidesLen * slidesWidth;
    var calcSlide = Math.ceil(slidesLen / calcSlides - 1) * slideWidth
    // var calcSlide = Math.ceil(20 / 4 - 1) * 1000
    console.log(calcSlide)


    if (btns == 'next') {

        transform += slidesWidth + 2;

        slide.css({'transform': 'translate3d(' + transform + 'px' + ', 0px, 0px)'});
    }
    if (btns == 'prev') {
        transform -= slidesWidth;
        slide.css({'transform': 'translate3d(' + transform + 'px' + ', 0px, 0px)'});
    }

    if (transform >= dd) {

        slide.css({'transform': 'translate3d(0px, 0px, 0px)'});
    }
    if (transform <= 0) {
        calcSlide = calcSlide - slidesWidth;
        var ss = dd - slideWidth;
        slide.css({'transform': 'translate3d(' + ss + 'px' + ', 0px, 0px)'});
    }

}