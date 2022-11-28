var arti = $('.c-content-expert__articles');
var jsarti = arti.find('.js-expert-article');
var btn = jsarti.find('button');
btn.click(function () {
    $(this).next().next().slideToggle();
    $(this).toggleClass('manfi');
})