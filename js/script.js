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