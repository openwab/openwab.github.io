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

    $('.parallax-contact').parallax({ imageSrc: 'assets/images/bg-contact.jpg' });
    $('.parallax-skills').parallax({ imageSrc: 'assets/images/php-code.jpg' });

    $('.ow-btn, .info').popover({ trigger: "hover" });

    $('.ow-tooltip').tooltip();


    $('.bt-scroll-top').click(function(event) {
        /* Act on the event */
        $('html,body').animate({ scrollTop: 0 }, 'slow');
    });

    /**Initialise la timeline *****/
    $('.timeline').owTimeline();

    //Manage top bar fixing 
    var nav = $('#navbar');
    var btScrollTop = $(".bt-scroll-top");
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
            btScrollTop.addClass('show');
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
            btScrollTop.removeClass('show');
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
                var position = $(ancre).offset().top;
                $('html,body').animate({ scrollTop: position - 40 }, 'slow');

            });


        });
    };
})(jQuery);

(function($) {
    $.fn.owTimeline = function(options) {
        var defaults = {
            'windowMinWidth': 600,
            'offsetTimeline': 50,
            'timelineGutter': 25
        }
        var parametres = $.extend(defaults, options);
        var rtl = false;
        var direction = $('html').attr('dir');
        if (typeof direction !== typeof undefined && direction !== false && direction == "rtl") {
            rtl = true;
        }

        console.log('Initialisation du plugin owTimeline');
        var windowWidth = $(this).width();

        return this.each(function() {


            if ($(window).width() > 600) { // For large devices
                $('.timeline').each(function() {
                    var tlineBar = $(this).find('.timeline-bar');
                    var tlineBarH = 0;
                    var tlineWrap = $(this).find('.timeline-inner');
                    var tlineWrapH = 0;
                    var tlineGutter = 25;

                    var col1Top = 0;
                    var col1TopPrev = 0;
                    var col1LastElemH = 0;
                    var col1Elems = $(this).find('.timeline-box-left');

                    var col2Top = 50;
                    var col2TopPrev = 0;
                    var col2LastElemH = 0;
                    var col2Elems = $(this).find('.timeline-box-right');

                    // Switch top params for RTL
                    if (rtl) {
                        col1Top = col2Top;
                        col2Top = 0;
                    }

                    // Positioning first column elements
                    for (var i = 0; i < col1Elems.length; i++) {
                        $(col1Elems[i]).css({ 'position': 'absolute', 'left': '0', 'top': col1Top + 'px' });
                        col1TopPrev = col1Top;
                        col1Top = col1Top + $(col1Elems[i]).height() + tlineGutter;
                        col1LastElemH = $(col1Elems[i]).height();
                    }

                    // Positioning second column elements               
                    for (var i = 0; i < col2Elems.length; i++) {
                        $(col2Elems[i]).css({ 'position': 'absolute', 'right': '0', 'top': col2Top + 'px' });
                        col2TopPrev = col2Top;
                        col2Top = col2Top + $(col2Elems[i]).height() + tlineGutter;
                        col2LastElemH = $(col2Elems[i]).height();
                    }

                    // Set container & bar height's								
                    if (col1Top > col2Top) {
                        tlineWrapH = col1Top - tlineGutter;
                    } else {
                        tlineWrapH = col2Top - tlineGutter;
                    }

                    if (col1TopPrev > col2TopPrev) {
                        tlineBarH = col1TopPrev;
                    } else {
                        tlineBarH = col2TopPrev;
                    }

                    tlineWrap.height(tlineWrapH);
                    tlineBar.css({ 'top': '80px', 'height': tlineBarH + 'px' });
                });
            } else { // For small devices
                $('.timeline-bar').attr('style', '');
                $('.timeline-box').attr('style', '');
                $('.timeline-inner').attr('style', '');
            }

        });

    }; /** END fn.***/
})(jQuery); /** END Function ***/

(function($) {
    $.fn.owTooltip = function(options) {
        var defaults = {
            "trigger": "ow-tooltip",
            "hover": true,
            "menu_position": 'left'
        };
        var parametres = $.extend(defaults, options);
        var interests = $("#interest");
        var tooltips = $("#interest span");

        return this.each(function() {

            if (interests.length > 0) {
                for (var i = 0; i < tooltips.length; i++) {
                    var width = $(tooltips[i]).outerWidth();
                    var parent_width = $(tooltips[i]).parent().outerWidth();
                    var left = (parent_width - width) / 2;

                    $(tooltips[i]).css('left', left + 'px');
                } /**End for **/
            }


        });
    };
})(jQuery);
