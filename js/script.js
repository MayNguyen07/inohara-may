// Scroll to top
function scrollToTop() {
    $(".pagetop ").click(function() {
        $("html, body").animate({
                scrollTop: 0,
            },
            700
        );
    });
}
scrollToTop();

//  Nav bar for mobile phone
$('.menu-toggle').click(function() {

    $('#gNav').toggleClass('open', 500);
    $(this).toggleClass('close');

})

// Validation form
$("#form").validate({
    // focusInvalid: false,
    rules: {
        name: {
            required: true,
        },
        mail: {
            required: true,
        },
        textarea: {
            required: true,
        },
    },
    messages: {
        name: {
            required: "未入力です。",
        },
        mail: {
            required: "未入力です。",
            email: "入力に誤りがあります。",
        },
        textarea: {
            required: "未入力です。",
        },
    },


    errorPlacement: function(error, element) {
        var name = element.attr("name");
        if (element.attr("name") === name) {
            error.appendTo($(".is_error_" + name));
        }
    },

    errorElement: "span",
    errorClass: "is-error",
});