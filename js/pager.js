$(function () {
    var buttonPage = $('.page');

    function switchToNext() {
        var sefff = $(this);

        if (sefff.hasClass('current'))
            return false;
        else {
            $('.page.current').removeClass('current');
            sefff.addClass('current');

        }
    }

    buttonPage.on('click', switchToNext);
});
var paginate = {
    items: {},
    divProduct: null,
    totalPages: 1, // فرض بگیرید ما سی تا ایتم داریم و در هر صفحه میخوایم 6 تا باشه پس اگر 30 رو تقسیم بر شیش بکنیم  پنج به دست میاد  و توتتال پیچز ما هم میشه 5
    perPage: 3,
    currentPage: 0,
    createNavigation: function () {
        this.totalPages = Math.ceil(this.items.length / this.perPage) // 30 / 6  = 5
        var div_pagination = $('<div class="pagination"></div>').append('<a class="nav-pager prev disabled" data-next="false"></a><a class="nav-pager1 first disabled" data-name="false"></a>');
        // var div_pagination = $('<div />').addClass('pagination')

        for (var i = 0; i < this.totalPages; i++) {
            // 0 1 2 3 4 5
            // console.log(i);

            var pageElClass = "page";
            if (!i) {
                pageElClass = "page current";
            }
            var pageEl = '<a class="' + pageElClass + '" data-page="' + (i + 1) + '">' + (i + 1) + '</a>';
            div_pagination.append(pageEl);
        }
        div_pagination.append('<a class="nav-pager next" data-next="true"></a><a class="nav-pager1 last" data-name="true"></a>');

        this.divProduct.after(div_pagination);

        var that = this;
        $('.nav-pager').on('click', function () {
            var el = $(this);
            console.log(el)
            that.navigate(el.data("next"));
            $('html,body').animate({scrollTop: $('.tab-box').offset().top}, 800);

            // $("html, body").animate({scrollTop: $($('#sectionCmt')).offset().top}, 500);


        })
        $('.nav-pager1').on('click', function () {
            var el = $(this);
            console.log(el)
            that.move(el.data("name"));
            $('html,body').animate({scrollTop: $('.tab-box').offset().top}, 800);

        });

        $('.page').on('click', function () {
            var el = $(this);
            console.log(el)
            that.goToPage(el.data("page"));
            $('html,body').animate({scrollTop: $('.tab-box').offset().top}, 800);


        })


    },
    move: function (move) {
        $(".pagination .nav-pager1,.pagination .nav-pager").removeClass("disabled");
        if (move) {
            this.currentPage = (this.totalPages - 1);
            $(".pagination .nav-pager.next,.pagination .nav-pager1.last").addClass("disabled");

        } else {
            this.currentPage = 0;
            $(".pagination .nav-pager.prev,.pagination .nav-pager1.first").addClass("disabled");

        }
        this.showItems();
    },
    navigate: function (next) {
        if (isNaN(next) || next === undefined) {
            next = true;
        }
        $(".pagination .nav-pager1,.pagination .nav-pager").removeClass("disabled");

        if (next) {
            this.currentPage++;
            if (this.currentPage > (this.totalPages - 1)) {
                this.currentPage = (this.totalPages - 1);
            }
            if (this.currentPage == (this.totalPages - 1))
                $(".pagination .nav-pager.next,.pagination .nav-pager1.last").addClass("disabled");

        } else {
            this.currentPage--;
            if (this.currentPage < 0) {
                this.currentPage = 0;
            }
            if (this.currentPage == 0)
                $(".pagination .nav-pager.prev,.pagination .nav-pager1.first").addClass("disabled");

            // $(".pagination .nav-pager.prev").addClass("disabled");
        }
        this.showItems();

    },
    updateNavigation: function () {
        var pages = $(".pagination .page");
        pages.removeClass("current");
        // console.log('dsf  ' + this.currentPage);

        $('.pagination .page[data-page="' + (this.currentPage + 1) + '"]').addClass('current');
    },
    goToPage: function (page) {
        // alert(this.currentPage)
        this.currentPage = page - 1;
        // alert(this.currentPage)
        $(".pagination .nav-pager1,.pagination .nav-pager").removeClass("disabled");
        if (this.currentPage == (this.totalPages - 1))
            $(".pagination .nav-pager.next,.pagination .nav-pager1.last").addClass("disabled");

        if (this.currentPage == 0)
            $(".pagination .nav-pager.prev,.pagination .nav-pager1.first").addClass("disabled");

        this.showItems();

    },
    showItems: function () {
        this.items.hide();
        console.log('current page == ' + this.currentPage);
        var calc23 = this.perPage * this.currentPage;
        // 1 =  6 * 0  = 0;
        // 2 = 6 * 1= 6
        // 3  = 6 * 2 = 12
        this.items.slice(calc23, calc23 + this.perPage).show();
        this.updateNavigation();
        // 0 + 6 = 6;
        // 6 + 6 = 12
    },
    init: function (divProduct, items, perPage) {
        this.divProduct = divProduct;
        this.items = items;
        this.totalPages = 1;
        this.perPage = perPage;
        this.currentPage = 0;
        this.createNavigation();
        this.showItems();
        // من این دوتا رو هم ایجا قرار میدم که وقتی تابع پجینیشن رو صدا میزنیم و کد های داخلش اجرا میشناین اینیت جزشونه هو این دو تابع هم بیاد اجرا بشه
    },

}
console.log(paginate);
jQuery.fn.pagination = function (perPage, itemSelector) {
    var div_product = $(this);
    console.log(div_product)
    var div_items = $(itemSelector);
    console.log(div_items)
    // console.log(isNaN('sdf'));
    if (isNaN(perPage) || perPage === undefined) {
        perPage = 6;
    }

    if (div_items.length <= perPage) {
        // alert('odsf')
        return true;
    }
    paginate.init(div_product, div_items, perPage)
}
$('.c-listing__items1').pagination(8, '.items-li-pp')
$('.c-comments__list').pagination(6, '.c-comments__list_li')
$('.product-questions-list').pagination(3, '.c-faq__list')
