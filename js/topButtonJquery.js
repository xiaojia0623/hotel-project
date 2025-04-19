import $ from 'jquery';

$(document).ready(function() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            if ($(".goTop").hasClass("hide")) {
                $(".goTop").toggleClass("hide");
            }
        } else {
            $(".goTop").addClass("hide");
        }
    });

    $(".jq-goTop").click(function (e) {
        e.preventDefault();
        $("html,body").animate(
            {
                scrollTop: 0
            },
            600
        );
    });
});