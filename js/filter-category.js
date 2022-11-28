var dropDown = $('.dropdown');
var placeHoler = dropDown.find('span');
var options = dropDown.find('.drop li');
var valOptions = options[0].innerText;
placeHoler.text(valOptions)
var dataName;
var len = options.length;
// var valOptions = '';
// var index = -1;
// var valueOpt
for (var i = 0; i < len; i++) {
    var d3d = options[i];
    // console.log(d3d.dataset.name)
    $('select').append("<option value='" + d3d.dataset.name + "'>" + d3d.innerText + "</option>");
}

dropDown.click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('active');
})

options.on('click', function () {
    var opt = $(this);
    var valOptions = opt.text();
    // console.log(valOptions);
    placeHoler.text(valOptions);
    opt.siblings().removeClass('is-active selected')
    opt.filter(':contains("' + valOptions + '")').addClass('is-active selected');
    dataName = opt.data('name');
    // console.log(dataName)
    $('select option').removeAttr('selected');
    var ddd = $('.modal').find('option[value=' + dataName + ']').attr('selected', 'selected').trigger("change");
    // console.log(ddd);

});

$(document).click(function () {
    // close menu on document click
    $('.dropdown').removeClass('active');
});

var filterActive = 'cat-all';
// console.log(filterActive)

function filterCatgory(category) {
    console.log('category = ' + category);

    if (filterActive != category) {
        // alert('ok')
        $('.c-compare__list1 .c-compare-product').removeClass('active');
        $('.c-compare__list1 .c-compare-product').filter('[data-cat="' + category + '"]').addClass('active');
        filterActive = category;
    }
}

$('.c-compare__list1 .c-compare-product').addClass('active');
$('.filter-category select').change(function () {
    var self = $(this);
    // console.log(self.val())
    if (self.val() == 'cat-all') {
        $('.c-compare__list1 .c-compare-product').addClass('active');
    } else {
        filterCatgory(self.val());
    }
})

// $("form").submit(function(e) {
//     e.preventDefault();
//     var query = $("form .inputs").val().toLowerCase();
//
//     $(".f-cat").hide();
//     $(".f-cat").each(function() {
//         var text = $(this).text().toLowerCase();
//
//         if (text.indexOf(query) > -1 ) {
//             $(this).show();
//         }
//     });
// });
$('.modal-input-search').on('keyup input', function () {
    var query = $(this).val().toLowerCase();
//
    $(".c-compare__list1 .c-compare-product").hide();
    $(".c-compare__list1 .c-compare-product").each(function () {
        var text = $(this).text().toLowerCase();

        if (text.indexOf(query) > -1) {
            $(this).show();
        }
    });
})