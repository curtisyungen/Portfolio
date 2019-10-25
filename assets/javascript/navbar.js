// NAVBAR 
// =============================================

// Scroll to section on page when navbar clicked
$(".navbar-item").on("click", function() {
    var title = $(this).attr("data-title");
    var scroll = 0;

    switch (title) {
        case "arrow": scroll = $("#navbar-arrow").offset().top + 60; break;
        default: "";
    }

    $("html, body").animate({ scrollTop: scroll }, 400);
});

// Animates navbar arrow to move up and down
function floatArrow() {
    setInterval(function() {
        
        $(".fa-chevron-down").animate({
            marginTop: `+=10`,
        }, 500);

        $(".fa-chevron-down").animate({
            marginTop: `-=10`,
        }, 500);

    }, 500);
}

floatArrow();
