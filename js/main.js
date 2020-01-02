/* JS voor fotografie*/

$(document).ready(function () {
    $(".menu").click(function (){
        $(".close-menu").toggleClass("open-menu");
    });
    $(window).scroll(function () {
        $(".close-menu").removeClass("open-menu");
        event.preventDefault();

    })

});
