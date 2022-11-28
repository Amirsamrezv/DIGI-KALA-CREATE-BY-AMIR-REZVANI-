$(document).ready(function () {
    $('.tab-items a').click(function(){
        var position = $(this).position();
        var width = $(this).width();
        // console.log(position)
        // console.log(width)
        $(".tab-slider").css({"left": +position.left, "width": width});
        // alert(index)
        $(".tab-items a").removeClass("active")
        $(this).addClass("active");
        var index = $(this).index();
        // console.log(index)

        $(".tab-sections > section").hide();
        $(".tab-sections > section").eq(index - 1).show();
    })
    var activeWidth = $(".tab-items .active").width();
    var activePosition = $(".tab-items .active").position();
    $(".tab-slider").css({"left": + activePosition.left, "width": activeWidth});
})
window.addEventListener("resize", function () {
    nav_Hover();
    sticky();
    if (!$('.input-t-header-search').hasClass('bg-white')) {
        $('.overlay').removeClass('is-active');
    }
});