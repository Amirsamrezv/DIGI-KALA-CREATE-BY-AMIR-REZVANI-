var reer = $('.c-compare__list--header');
var st = reer.offset().top;
window.onresize = function () {
    if (window.pageYOffset >= st) {
        $('.reer .c-compare__img .img').addClass('ps1')
        $('.reer .c-compare-product').addClass('ps2')
        $('.reer .btn-primary').addClass('ps3')

    }else{
        $('.reer .c-compare__img .img').removeClass('ps1')
        $('.reer .c-compare-product').removeClass('ps2')
        $('.reer .btn-primary').removeClass('ps3')
    }
}
window.onscroll = function () {
    if (window.pageYOffset >= st) {
        $('.reer .c-compare__img .img').addClass('ps1')
        $('.reer .c-compare-product').addClass('ps2')
        $('.reer .btn-primary').addClass('ps3')

    }else{
        $('.reer .c-compare__img .img').removeClass('ps1')
        $('.reer .c-compare-product').removeClass('ps2')
        $('.reer .btn-primary').removeClass('ps3')
    }
}

var modal = $('#myModal');
$('.add-product').click(function () {
    modal.css('display', 'block');
    $('body').addClass('ovr')
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
// var li = $('.modal .product');
$('.c-compare__list1 li').click(function () {
    var self = $(this);
    console.log(self)
    var li1 = $('.reer .c-compare-product');
    var count = li1.length;
    var img = self.find('img').attr('src');
    console.log(img);

    var title = self.find('.title').text();
    console.log(title);

    var price = self.find('.c-price__value').text();
    console.log(price);
    var link = self.find('.btn-primary').attr('href');
    console.log(link);
    var dataId = self.attr('data-id');
    console.log(dataId);
    var list = $('.reer');
    $('.modal').css('display', 'none')
    $('body').removeClass('ovr')
    var dd = list.find('li[data-id=' + dataId + ']');
    var item = '<li data-id="' + dataId + '"  class="c-compare-product">' +
        '<div class="c-compare__img">' +
        '<div class="c-compare__content-holder">' +
        '<div class="img"><img src="' + img + '"></div>' +
        '<span class="title">' + title + '</span>' +
        '<div class="c-price">' +
        '<div class="c-price__value">' + price + '</div>' +
        '</div>' +
        '</div>' +
        '<a class="btn-primary" href="' + link + '">مشاهده و خرید محصول</a>' +
        '</div>' + ' <span class="remove-product" onclick="removeItem(this)"></span>' +
        '</li>';

    // var item = '<li data-id="' + dataId + '" class="product" data-id="1">' +
    //     '<img src="' + img + '">' +
    //     '    <p>'+title+'</p>' +
    //     '    <span class="remove" onclick="removeItem(this)">&times;</span>' +
    //     '    <div class="show" style="display: block">' +
    //     '        <p class="price">'+price+'</p>' +
    //     '        <a href="'+link+'" class="kkk">خرید محصول</a>' +
    //     '    </div>' +
    //     '</li>';
    list.prepend(item);
    $('.modal ul li[data-id=' + dataId + ']').fadeOut()
    // }


    if (count >= 4) {
        alert('ok')
        $('.add-product').css('display', 'none');
    }

})

function removeItem(i) {

    var pppp = $(i).parent();
    pppp.remove();

    $('.add-product').css('display', 'flex');


    var idd = pppp.attr('data-id');
    // console.log(idd);
    $('.modal ul li[data-id=' + idd + ']').fadeIn();
    // $('.box ul li[data-id=' + idd + ']').append()
}