$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 80) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header');
    }
});
// Document Ready
$(document).ready(function() {

    //Typing animation

   

    new Typed('#type-it', {
        strings: ['Web/Mobile', 'Full Stack'],
        typeSpeed: 100,
        loop:true
});

});