// SHOW MORE / SHOW LESS
// =============================================

// Event Handler

$(".projShowMore").on("click", showMore);

// Show More Function
// Called when "show more" or "show less" is clicked
// Displays more or less info about category

function showMore() {

    // Get status attribute from clicked link
    var status = $(this).attr("data-status");

    // Get label name to which this link pertains
    var label = $(this).attr("data-label");

    // Toggle show more/less info
    // Update status and text of link
    if (status == "more") {

        // Show more
        $(`#${label}`).slideDown("fast");

        $(this)
            .attr("data-status", "less")
            .text("Show less");
    }
    else {

        // Show less
        $(`#${label}`).slideUp("fast");

        $(this)
            .attr("data-status", "more")
            .text("Show more");
    }
}




