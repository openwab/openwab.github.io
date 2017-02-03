/**
 * Fichier javascript principal
 * Ce fichier regroupe les iniçtiateurs ainsi que les plugins internes
 */

$(document).ready(function($) {
    // site preloader -- also uncomment the div in the header and the css style for #preloader
    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() { $(this).remove(); });
    });
    //Initialise smooth scroll 
    $('.owscroll').owScroll();

    //Manage top bar fixing 
    var nav = $('#navbar');

    var topMenu = $("#navbar"),
        topMenuHeight = topMenu.outerHeight() + 15,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function() {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }

        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");
    });


});


/**
 * owScroll - smooth scroll one page plugin
 */
(function($) {
    $.fn.owScroll = function(options) {
        var defaults = {
            "menu_trigger": "owscroll",
            "show_menu": false,
            "menu_position": 'left'
        };
        var parametres = $.extend(defaults, options);

        return this.each(function() {

            $('.' + parametres.menu_trigger).click(function(e) {
                e.preventDefault();
                var ancre = $(this).attr('href');
                $('html,body').animate({ scrollTop: $(ancre).offset().top }, 'slow');

            });


        });
    };
})(jQuery);
