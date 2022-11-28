$('.c-product__seller-extra').click(function () {
    $(this).parent().addClass('u-hidden')
    $(this).parent().next().removeClass('u-hidden');

})
$('.js-product-info-box-back-btn').click(function () {
    $(this).parent().addClass('u-hidden');
    $(this).parent().prev().removeClass('u-hidden')

})

