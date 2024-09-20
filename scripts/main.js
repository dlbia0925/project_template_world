$(document).ready(function () {
    // Loop through each navtitle
    $(".nav-second-title").each(function() {
        var b = $(this); // Current navtitle
        var w = b.next(".wrapper"); // Next sibling wrapper

        // Set initial height based on whether 'open' class exists
        if (w.hasClass("open")) {
            w.height(w.find("ul").outerHeight(true));
        } else {
            w.height(0); // Closed by default
        }

        // Click event to toggle the wrapper
        b.click(function () {
            if (w.hasClass('open')) {
                w.removeClass('open');
                w.height(0); // Collapse
            } else {
                w.addClass('open');
                w.height(w.find("ul").outerHeight(true)); // Expand
            }
        });
    });
});