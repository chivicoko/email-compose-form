(function ($) {
    "use strict";

    $(document).ready(function () {

        /*---------------------------------------------------
            mainmenu
        ----------------------------------------------------*/
        $('.mainmenu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: '1199',
        });

        /*---------------------------------------------------
                countdown
        ----------------------------------------------------*/
        $('#countdown').syotimer({
            year: 2023,
            month: 12,
            day: 11,
            hour: 20,
            minute: 30,
        });

    });

    /*---------------------------------------------------
        preloader
    ----------------------------------------------------*/
    $(window).on('load', function () {
        $('.preloader').fadeOut(500);
    });


}(jQuery));


// popup
window.addEventListener("load", () => {
    setTimeout((event) => {
        document.querySelector(".popup").style.display = "block";
    }, 1000);
});

// popup
document.querySelector("#close").addEventListener("click", () => {
    document.querySelector(".popup").style.display = "none";
});