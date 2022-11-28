var modal = $('#myModal');
$('.c-gallery__items li').click(function () {
    modal.css('display', 'block');
    $('body').addClass('ovr');

    zoom();
})

$('.close').click(function () {
    modal.css('display', 'none');
    $('body').removeClass('ovr')
});
$(window).on('click tochstart', function (e) {
    if (modal.is(e.target)) {
        modal.css('display', 'none');
        $('body').removeClass('ovr')
    }
})
var SliderUlLi = $('.c-gallery__items li');

SliderUlLi.click(function () {
    var self = $(this);
    var dataId = self.data('id');
    console.log('dataId = ' + dataId)
    var index = self.index();
    // alert(index)
    var SliderUlLiImg = self.find('img').attr('src');
    $('.content .gal').css('display', 'none')
    // $('.content .gal').removeClass('is-active');
    $('.content .gal').eq(index).css('display', 'block');
    $('.infoImg .gal-small').removeClass('selected');
    $('.infoImg .gal-small').eq(index).addClass('selected');
    // var galSmall.find('img');
})
$('.infoImg .gal-small').click(function () {
    var _this = $(this);
    // var dataSlide = _this.data('slide');
    var index1 = _this.index();
    // console.log('dataId = ' + dataSlide)
    $('.infoImg .gal-small').removeClass('selected');
    _this.addClass('selected');
    // $('.content .gal').removeClass('is-active');
    $('.content .gal').css('display', 'none')
    // $('.content .gal').removeClass('is-active');
    $('.content .gal').eq(index1).css('display', 'block');
})
function zoom() {
    var main = $('.c-remodal-gallery__content_1'),
        mainImg = main.find('.imggg'),
        bool = false,
        win = $(window),
        widthImg = mainImg.width(),
        // console.log('width Img =  ' + widthImg)
        heightImg = mainImg.height(),
        // console.log('height Img =  ' + heightImg)
        positionFunc = function (e) {
            // console.log('PageX = ' + e.pageX);
            // console.log('PageY = ' + e.pageY);
            // console.log(e.pageX - main.offset().left);
            // console.log(e.pageY - main.offset().top);
            //
            // console.log('Left = ' + main.offset().left);
            // console.log('Top = ' + main.offset().top);

            return x = e.pageX - main.offset().left, y = e.pageY - main.offset().top;
        };
    console.log('width Img =  ' + widthImg)

    var zoomIn = function (e) {
        positionFunc(e);
        mainImg.animate({
            left: -x,
            top: -y,
            width: widthImg * 2.01,
            height: heightImg * 2.01
        }, 200, function () {
            main.bind('mousemove', function (e) {
                positionFunc(e);
                mainImg.css({
                    left: -x,
                    top: -y
                });
            });
        }).css({
            cursor: 'zoom-out',
        });
        bool = true;
    }
    var zoomOut = function () {
        mainImg.animate({
            left: 0,
            top: 0,
            width: widthImg,
            height: heightImg
        }, 100).css({
            cursor: ''
        });
        main.unbind('mousemove');
        bool = false;
    }

    main.bind('mousedown', function (e) {
        if (bool !== true) {
            zoomIn(e);
            main.css({
                height: heightImg
            });
        } else {
            zoomOut();
            main.css({
                height: $(this).height()
            });
        }
    })
//     .bind('mouseout', function () {
//     zoomOut();
//     // alert('ok')
// });
    window.scroll(function () {
        if (bool) {
            zoomOut();
        }
    });
}