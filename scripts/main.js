$(document).ready(function () {
    $(".nav-second-title").each(function() {
        var b = $(this); // Current navtitle
        var w = b.next(".wrapper"); // Next sibling wrapper
        var icon = b.find(".foldicon"); // Select the foldicon

        // Set initial height based on whether 'open' class exists
        if (w.hasClass("open")) {
            w.height(w.find("ul").outerHeight(true));
            icon.addClass('flipped'); // Flip icon if open
        } else {
            w.height(0); // Closed by default
        }

        // Click event to toggle the wrapper and icon
        b.click(function () {
            if (w.hasClass('open')) {
                w.removeClass('open');
                w.height(0); // Collapse
                icon.removeClass('flipped'); // Reset icon
            } else {
                w.addClass('open');
                w.height(w.find("ul").outerHeight(true)); // Expand
                icon.addClass('flipped'); // Flip icon
            }
        });
    });
});

$(document).ready(function () {
    // For each clickable list item
    $(".hvr-fade").click(function () {
        // Remove the 'selected' class from any previously selected item
        $(".hvr-fade").removeClass("selected");

        // Add 'selected' class to the clicked item
        $(this).addClass("selected");
    });
});

$(document).ready(function () {
    $('.list li').click(function () {
        // Remove .selected from all list items
        $('.list li').removeClass('selected');
        // Add .selected only to the clicked list item
        $(this).addClass('selected');
    });
});