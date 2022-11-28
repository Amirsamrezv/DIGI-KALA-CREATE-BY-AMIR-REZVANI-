$(document).on('click touchstart', function (e) {
    var headerSearchBox = $('.t-header-search-box');
    var input = $('.input-t-header-search');

    // console.log(e.target);
    // console.log($(e.target).parent());
    // console.log($(e.target).parent().parent());
    // console.log($(e.target).parent().parent().parent());
    // console.log($(e.target).has(csearch))
    // false true = false
    // true false = false
    // false false = false
    //true true = true
    if ($(e.target).parent().is(headerSearchBox) || $(e.target).parent().parent().is(headerSearchBox)) {
        // if ($(e.target).is(csearch) || csearch.has(e.target).length == 1) {

        input.addClass('bg-white')
        $('.overlay').addClass('is-active');
        $('.t-header-search-lately').show();


    } else {
        input.removeClass('bg-white');
        $('.overlay').removeClass('is-active');
        $('.t-header-search-lately').hide();

    }
})


function nav_Hover() {
    var navLis = $('.nav-level-1-li');
    var navUl = $('.nav-level-1-ul');
    var offsetleftUl = navUl.offset().left;
    // console.log(offsetleftUl);
    var widthUl = navUl.width();
    // console.log(widthUl);
    var navHover = $('.nav-hover');

    navLis.hover(function () {
        var self = $(this);
        var widthCurrentLi = self.width();
        // console.log(widthCurrentLi);
        var offsetleftCurrentLi = self.offset().left;
        // console.log(offsetleftCurrentLi);
        navHover.css({'width': widthCurrentLi})
        navHover.css({'right': widthUl - (offsetleftCurrentLi + widthCurrentLi) + offsetleftUl});

        navHover.css('transform', 'scalex(1)');
        $('.t-header-search-lately').hide();
        $('.input-t-header-search').removeClass('bg-white')
        if (self.hasClass('has-sub')) {
            $('.overlay').addClass('is-active');
        }
    }, function () {
        $('.overlay').removeClass('is-active');
        navHover.css('transform', 'scalex(0)');
    })

}

nav_Hover()

$(document).ready(function () {
    $('.sub-menu-right-list-a').hover(function () {

        // var position = $(this).position();
        // var width = $(this).width();
        // console.log(position)
        // console.log(width)
        // $(".tab-slider").css({"left": +position.left, "width": width});
        // alert(index)
        $(".sub-menu-right-list-a").removeClass("active")
        $(this).addClass("active");
        var index = $(this).index();
        // console.log(index)

        $(".sub-menu-left-section .section").hide();
        $(".sub-menu-left-section .section").eq(index).show();
    })


})


function sticky() {
    $(window).scroll(function (evt) {
        var y = $(this).scrollTop();

        if (y >= 50) {
            $('nav').addClass('sticky');
            $('.goToTop').fadeIn();
            $('.js-sticky').addClass('fixed');
        } else {
            $('nav').removeClass('sticky')
            $('.js-sticky').removeClass('fixed');


        }
    })
}

sticky()
$('.goToTop').click(function () {
    $('html,body').animate({scrollTop: 0}, 800);
})
// $('html,body').animate({scrollTop: 0}, 800);

$('.js-show-more').click(function () {
    $('.js-more-subcategory').toggleClass('c-catalog__plain-list-subcategory--height-controller');
})
$('.c-product__params-more-handler').click(function () {
    $('.js-more-attrs').toggleClass('is-active');
})
$('.btn-option--wishes').click(function () {
    $(this).toggleClass('is-active');
})
var boxsupplier = $('.js-supplier').length;
$('.js-more-suppliers-count').text(boxsupplier - 2)
$('.js-more-supplier-button').click(function () {
    $('.js-supplier').addClass('in-list');
    $(this).parent().addClass('c-table-suppliers-hidden');
    $('.js-table-suppliers-less').removeClass('c-table-suppliers-hidden');

})
$('.js-less-supplier-button').click(function () {
    // $('.js-supplier').eq()removeClass('in-list');
    $(".js-supplier:nt").removeClass('in-list');
    // $('.js-supplier').each(function () {
    //    $(this)
    // })
    $(this).parent().addClass('c-table-suppliers-hidden');
    $('.js-table-suppliers-more').removeClass('c-table-suppliers-hidden');

})
$('.js-mask_handler').click(function () {
    $('.c-mask__text').toggleClass('is-active');
    if ($('.c-mask__text').hasClass('is-active')) {
        $('.c-mask__text span').text('بستن')
    } else {
        $('.c-mask__text span').text('ادامه مطلب')
    }
})
//مدال برای صفحه محصولات مدال اشتراک گذاری
var modal1 = $('#myModal1');
$('.btn-option_social').click(function () {
    modal1.css('display', 'block');
    $('body').addClass('ovr');

})

$('.close').click(function () {
    modal1.css('display', 'none');
    $('body').removeClass('ovr')
});
$(window).on('click tochstart', function (e) {
    if (modal1.is(e.target)) {
        modal1.css('display', 'none');
        $('body').removeClass('ovr')
    }
})
$('.js-box-toggle').on('click', function () {

    var cFilter = $(this).parent().find('.js-box-content');
    if ($(this).hasClass('hide')) {
        $(this).removeClass('hide');
        cFilter.slideDown();
    } else {
        $(this).addClass('hide');
        cFilter.slideUp();

    }
})
window.addEventListener("resize", function () {
    nav_Hover();
    sticky();
    if (!$('.input-t-header-search').hasClass('bg-white')) {
        $('.overlay').removeClass('is-active');
    }
});


// $(function () {
//
//         var top = $('.js-sticky').offset().top - parseFloat($('.js-sticky').css('marginTop').replace(/auto/, 0));
//         var footTop = $('.c-footer').offset().top - parseFloat($('.c-footer').css('marginTop').replace(/auto/, 0));
//
//         var maxY = footTop - $('.js-sticky').outerHeight();
//
//
//
//     $(window).scroll(function (evt) {
//         var y = $(this).scrollTop();
//         if (y > top) {
//
// //Quand scroll, ajoute une classe ".fixed" et supprime le Css existant
//             if (y < maxY) {
//                 $('.js-sticky').addClass('fixed').removeAttr('style');
//             } else {
//
// //Quand la sidebar arrive au footer, supprime la classe "fixed" précèdement ajouté
//                 $('.js-sticky').removeClass('fixed').css({
//                     position: 'absolute',
//                     width: '98%',
//                     top: (maxY - top) + 'px'
//                 });
//             }
//         } else {
//             $('.js-sticky').removeClass('fixed');
//         }
//     });
//
//
// });
//
//
// $('html,body').animate({scrollTop: 0}, 800);
//
// function search_clear()
// {
//     var input_search=$('.js-input');
//     input_search.each(function()
//     {
//         var button_clear=$(this).siblings('.reset').first();
//         var input=$(this);
//         input.on('keyup',function(){
//             if($(this).val().length > 0)
//             {
//                 button_clear.css('display','block');
//             }
//             else{
//                 button_clear.css('display','none');
//             }
//         });
//
//         button_clear.on('click',function(){
//             input.val('');
//             $('li',('.js-box-content')).show();
//             button_clear.css('display','none');
//         });
//
//         if($(this).val().length>0)
//         {
//             button_clear.css('display','block');
//         }
//     })
// }
//
// search_clear();
$('.reset').click(function () {
    $('li', ('.js-box-content')).show();
})

function serachFilter() {
    var filterInput = $('.js-input');
    filterInput.on('keyup', function () {
        var selfInput = $(this);
        var content = selfInput.closest('.js-box-content');
        console.log(content);
        if (selfInput.val().length > 0) {

            $('.lblcheckbox', content).each(function () {

                var pattern = new RegExp(selfInput.val(), 'i');

                if (pattern.test($(this).data('fa')) || pattern.test($(this).data('en'))) {
                    $(this).closest('li').show();
                    console.log($(this).closest('li'));
                } else {
                    $(this).closest('li').hide();
                }
            })
        } else {
            $('li', content).show();
        }
    })
}

serachFilter()


$('#js-footer-readmore').click(function () {
    $('.c-footer__seo-readmore').toggleClass('d-none');
    if ($('.c-footer__seo-readmore').hasClass('d-none')) {
        $(this).text('مشاهده بیشتر')
    } else {
        $(this).text('بستن')
    }
})

function rangeslider() {
    var rangeslider = document.querySelector('.rangeslider');
    var inputForm = document.querySelector('.js-slider-range-from');
    var inputTo = document.querySelector('.js-slider-range-to');
    var min = parseInt(inputForm.dataset.range);
    var max = parseInt(inputTo.dataset.range);
    noUiSlider.create(rangeslider, {
        start: [min, max],
        connect: true,
        direction: 'rtl',
        range: {
            'min': min,
            'max': max
        }
    });

    rangeslider.noUiSlider.on('update', function (values, handle) {

        var value = values[handle];

        if (handle) {
            inputTo.value = currency(Math.round(value));
        } else {
            inputForm.value = currency(Math.round(value));
        }

        if (parseInt(values[0]) !== min || parseInt(values[1]) !== max) {
            $('.js-price-filter').removeClass('disabled');
        } else {
            $('.js-price-filter').addClass('disabled');
        }
    })
}

rangeslider()

function currency(val) {
    //
    // var en_number = ['0','1','2','3','4','5','6','7','8','9'];
    // var fa_number = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];

    var n = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // for(i=0;i<=9;i++)
    // {
    //     var regex1 = new RegExp(en_number[i], "g");
    //     n = n.toString().replace(regex1,fa_number [i]);
    // }

    return n;

}


function dsf() {
    var btn3 = $('.js-expand-btn');
    var txt = $('.js-expandable-text-container');
    btn3.click(function () {
        if (txt.hasClass('collapsed')) {
            txt.removeClass('collapsed');
        } else {
            txt.addClass('collapsed');

        }
    })
}

dsf();
