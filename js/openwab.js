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
