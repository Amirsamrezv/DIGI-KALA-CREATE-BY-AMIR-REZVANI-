function replyComment() {
    var add = $('.js-add-answer-btn');
    var faq__list = $('.c-faq__list');
    var answer = faq__list.find('.replycomment');
    console.log(answer);

    add.each(function () {
        console.log($(this))
        $(this).click(function () {
            // answer.detach();
            $(this).parents('.c-faq__list').append(answer);
            $(answer).css('display', 'block');

        })
    })
}

replyComment();