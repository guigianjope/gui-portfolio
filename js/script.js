$(document).ready(function() {
    $(".menu-mobile").click(function () {
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
    });
});