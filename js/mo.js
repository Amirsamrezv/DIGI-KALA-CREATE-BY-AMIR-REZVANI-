var count1
$('.c-ui-checkbox-min').click(function () {
    var self1 = $(this);
    console.log(self)
    var lisSelf = self1.parents('li');
    console.log(lisSelf)
    var imgg = lisSelf.find('.c-promotion-box__image img').attr('src');
    var title_p = lisSelf.find('.c-product-box__title a').text();
    console.log(imgg);
    console.log(title_p);
    count1 = $('.c-listing__items input[type="checkbox"]:checked').length;
    var data_id = lisSelf.attr('data-id');
    var list1 = $('.js-compare-container');
    $('.js-compare-count').text(count1);
    $('.js-compare-image-preview').css('display', 'block')
    $('.js-compare-footer').css('display', 'block')

    $('.js-compare-image-preview img').attr("src", imgg);
    setTimeout(function () {
        $('.js-compare-image-preview').css('display', 'none')

    }, 2000)

    var ddd = list1.find('div[data-id=' + data_id + ']');
    var len_item = ddd.length;
    // // console.log(len_item)
    //
    if (len_item > 0) {
        ddd.remove();
    } else {


        var item11 = '<div data-id="' + data_id + '" class="js-compare-list-product">' +
            '    <div class="c-compare-footer__product-item">' +
            '        <div class="c-compare-footer__product-image"><img src="' + imgg + '"></div>' +
            '        <div class="c-compare-footer__product-title js-compare-product-title">' + title_p + '</div>' +
            '        <button class="c-compare-footer__remove-item js-product-remove" onclick="removeM(this)"></button>' +
            '    </div>' +
            '</div>'
        list1.prepend(item11);
    }

    if (count1 <= 0) {
        $('.js-compare-footer').fadeOut();
    }
})


$('.js-compare-all-remove').click(function () {
    var checked = $(this).is(":checked");
    if (!checked) {
        $('.js-compare-list-product').remove();
        $(".c-listing__items li input").each(function () {
            $(this).prop("checked", false);
        });
    }
    $('.js-compare-footer').fadeOut();
});

//
function removeM(i) {

    var ppppp = $(i).parents('.js-compare-list-product');
    count1--;
    $('.js-compare-count').text(count1);
    if (count1 <= 0) {
        $('.js-compare-footer').fadeOut();
    }
    ppppp.remove();
    var iddd = ppppp.attr('data-id');
    console.log(iddd);
    $('.c-listing__items li[data-id=' + iddd + ']').find('input[type="checkbox"]').prop("checked", false);
}

