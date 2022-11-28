// var like = $('.like');
// var dislike = $('.dislike');

$('.btn-like').click(function () {
    if ($(this).hasClass('js-comment-like')) {
        $(this).next().removeClass('comment-dislike');
        $(this).toggleClass('comment-like');
        if ($(this).hasClass('comment-like')) {
            $(this).attr('data-counter', 1);
            $(this).next().attr('data-counter', 0);
        } else {
            $(this).attr('data-counter', 0);
        }
    } else {
        $(this).prev().removeClass('comment-like');
        $(this).toggleClass('comment-dislike');
        if ($(this).hasClass('comment-dislike')){
            $(this).attr('data-counter', 1);
            $(this).prev().attr('data-counter', 0);
        } else {
            $(this).attr('data-counter', 0);
        }
    }

})