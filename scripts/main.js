// 3.5
$(document).ready(function () {
    // Handle .nav-first-title activation and deactivate list items
    $(".nav-first-title").click(function () {
        // Remove the 'actived' class from all other .nav-first-titles
        $(".nav-first-title").removeClass("actived");
        // Add the 'actived' class to the clicked .nav-first-title
        $(this).addClass("actived");

        // Deactivate all .list li items when a .nav-first-title is clicked
        $(".list li").removeClass("selected");
    });

    // Handle .nav-second-title (fold and expand)
    $(".nav-second-title").each(function () {
        var b = $(this); // Current .nav-second-title
        var w = b.next(".wrapper"); // Next sibling wrapper (list of items)
        var icon = b.find(".foldicon"); // Icon to flip on expand/collapse

        // Set initial state based on the presence of 'open' class
        if (w.hasClass("open")) {
            w.height(w.find("ul").outerHeight(true));
            icon.addClass('flipped'); // Flip the icon if the section is open
        } else {
            w.height(0); // Keep closed initially
        }

        // Click event to toggle the wrapper and icon
        b.click(function () {
            if (w.hasClass('open')) {
                w.removeClass('open');
                w.height(0); // Collapse the section
                icon.removeClass('flipped'); // Reset icon
            } else {
                w.addClass('open');
                adjustWrapperHeight(w); // Adjust wrapper height after expanding
                icon.addClass('flipped'); // Flip the icon
            }
        });
    });

    // Handle .list li selection
    $(".list li").click(function () {
        // Remove 'selected' class from all other list items
        $(".list li").removeClass('selected');
        // Add 'selected' class to the clicked list item
        $(this).addClass('selected');

        // Deactivate the .nav-first-title when a list item is clicked
        $(".nav-first-title").removeClass("actived");

        // Recalculate and adjust the wrapper height after selecting a list item
        var wrapper = $(this).closest('.wrapper');
        adjustWrapperHeight(wrapper); // Call height adjustment function
    });

    function adjustWrapperHeight(wrapper) {
        // Get the full height of the list
        var list = wrapper.find("ul");
        var listHeight = list.outerHeight(true); // This should include margins
    
        // Add any additional padding or margins if necessary
        var additionalHeight = 12; // Adjust this if needed
    
        wrapper.height(listHeight + additionalHeight); // Set wrapper height to fit content
    }
});

// 3.0
// $(document).ready(function () {
//     // Handle .nav-first-title activation and deactivate list items
//     $(".nav-first-title").click(function () {
//         // Remove the 'actived' class from all other .nav-first-titles
//         $(".nav-first-title").removeClass("actived");
//         // Add the 'actived' class to the clicked .nav-first-title
//         $(this).addClass("actived");

//         // Deactivate all .list li items when a .nav-first-title is clicked
//         $(".list li").removeClass("selected");
//     });

//     // Handle .nav-second-title (fold and expand) without deactivating .nav-first-title
//     $(".nav-second-title").each(function() {
//         var b = $(this); // Current .nav-second-title
//         var w = b.next(".wrapper"); // Next sibling wrapper (list of items)
//         var icon = b.find(".foldicon"); // Icon to flip on expand/collapse

//         // Set initial state based on the presence of 'open' class
//         if (w.hasClass("open")) {
//             w.height(w.find("ul").outerHeight(true));
//             icon.addClass('flipped'); // Flip the icon if the section is open
//         } else {
//             w.height(0); // Keep closed initially
//         }

//         // Click event to toggle the wrapper and icon
//         b.click(function () {
//             if (w.hasClass('open')) {
//                 w.removeClass('open');
//                 w.height(0); // Collapse the section
//                 icon.removeClass('flipped'); // Reset icon
//             } else {
//                 w.addClass('open');
//                 w.height(w.find("ul").outerHeight(true)); // Expand the section
//                 icon.addClass('flipped'); // Flip the icon
//             }
//         });
//     });

//     // Handle .list li selection and deactivate .nav-first-title only on list click
//     $(".list li").click(function () {
//         // Remove 'selected' class from all other list items
//         $(".list li").removeClass('selected');
//         // Add 'selected' class to the clicked list item
//         $(this).addClass('selected');

//         // Deactivate the .nav-first-title only when a list item is clicked
//         $(".nav-first-title").removeClass("actived");
//     });

//     // Prevent .nav-second-title from deactivating the .nav-first-title
//     $(".nav-second-title").click(function (e) {
//         // Stop event propagation to avoid affecting .nav-first-title
//         e.stopPropagation();
//     });
// });

// 1.0
// $(document).ready(function () {
//     $(".nav-second-title").each(function() {
//         var b = $(this); // Current navtitle
//         var w = b.next(".wrapper"); // Next sibling wrapper
//         var icon = b.find(".foldicon"); // Select the foldicon

//         // Set initial height based on whether 'open' class exists
//         if (w.hasClass("open")) {
//             w.height(w.find("ul").outerHeight(true));
//             icon.addClass('flipped'); // Flip icon if open
//         } else {
//             w.height(0); // Closed by default
//         }

//         // Click event to toggle the wrapper and icon
//         b.click(function () {
//             if (w.hasClass('open')) {
//                 w.removeClass('open');
//                 w.height(0); // Collapse
//                 icon.removeClass('flipped'); // Reset icon
//             } else {
//                 w.addClass('open');
//                 w.height(w.find("ul").outerHeight(true)); // Expand
//                 icon.addClass('flipped'); // Flip icon
//             }
//         });
//     });
// });

// $(document).ready(function () {
//     // For each clickable list item
//     $(".hvr-fade").click(function () {
//         // Remove the 'selected' class from any previously selected item
//         $(".hvr-fade").removeClass("selected");

//         // Add 'selected' class to the clicked item
//         $(this).addClass("selected");
//     });
// });

// $(document).ready(function () {
//     // For each clickable list item
//     $(".hvr-fade").click(function () {
//         // Remove the 'selected' class from any previously selected item
//         $(".hvr-fade").removeClass("actived");

//         // Add 'selected' class to the clicked item
//         $(this).addClass("actived");
//     });
// });

// $(document).ready(function () {
//     $('.list li').click(function () {
//         // Remove .selected from all list items
//         $('.list li').removeClass('selected');
//         // Add .selected only to the clicked list item
//         $(this).addClass('selected');
//     });
// });

// $(document).ready(function () {
//     // Event listener for nav-first-title click
//     $(".nav-first-title").click(function () {
//         // Remove 'actived' class from all .nav-first-title elements
//         $(".nav-first-title").removeClass("actived");

//         // Add 'actived' class to the clicked .nav-first-title element
//         $(this).addClass("actived");

//         // Reset any hover styles to apply the 'actived' background immediately
//         // $(this).css('background-color', 'white');
//     });
// });

// 2.0

// $(document).ready(function () {
//     // Handle .nav-first-title activation
//     $(".nav-first-title").click(function () {
//         // Remove the 'actived' class from all other .nav-first-titles
//         $(".nav-first-title").removeClass("actived");
//         // Add the 'actived' class to the clicked .nav-first-title
//         $(this).addClass("actived");
//     });

//     // Handle .nav-second-title (fold and expand) without deactivating .nav-first-title
//     $(".nav-second-title").each(function() {
//         var b = $(this); // Current .nav-second-title
//         var w = b.next(".wrapper"); // Next sibling wrapper (list of items)
//         var icon = b.find(".foldicon"); // Icon to flip on expand/collapse

//         // Set initial state based on the presence of 'open' class
//         if (w.hasClass("open")) {
//             w.height(w.find("ul").outerHeight(true));
//             icon.addClass('flipped'); // Flip the icon if the section is open
//         } else {
//             w.height(0); // Keep closed initially
//         }

//         // Click event to toggle the wrapper and icon
//         b.click(function () {
//             if (w.hasClass('open')) {
//                 w.removeClass('open');
//                 w.height(0); // Collapse the section
//                 icon.removeClass('flipped'); // Reset icon
//             } else {
//                 w.addClass('open');
//                 w.height(w.find("ul").outerHeight(true)); // Expand the section
//                 icon.addClass('flipped'); // Flip the icon
//             }
//         });
//     });

//     // Handle .list li selection and deactivate .nav-first-title only on list click
//     $(".list li").click(function () {
//         // Remove 'selected' class from all other list items
//         $(".list li").removeClass('selected');
//         // Add 'selected' class to the clicked list item
//         $(this).addClass('selected');

//         // Deactivate the .nav-first-title only when a list item is clicked
//         $(".nav-first-title").removeClass("actived");
//     });

//     // Prevent .nav-second-title from deactivating the .nav-first-title
//     $(".nav-second-title").click(function (e) {
//         // Stop event propagation to avoid affecting .nav-first-title
//         e.stopPropagation();
//     });
// });