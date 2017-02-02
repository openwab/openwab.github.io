/**
 * Fichier javascript principal
 * Ce fichier regroupe les iniçtiateurs ainsi que les plugins internes
 */

$(document).ready(function($) {
    //Initialise l'affichage des tweets 
    $('.myTweets').owTweets();
});

/**
 * owTweets - jQuery plugin
 */
(function($) {
    $.fn.owTweets = function(options) {
        var defaults = {
            "url": "",
            "id": '',
            "nb_tweets": 5,
            "contener_class": 'my-tweets',
            "delay": 7
        };
        var parametres = $.extend(defaults, options);

        return this.each(function() {
            //Build a query
            var queryUrl = 'https://api.twitter.com/1.1/statuses/mentions_timeline.json?count=10';
            console.log('url : ' + queryUrl);
            $.ajax({
                    url: queryUrl,
                    dataType: 'jsonp'
                })
                .done(function() {
                    console.log("success");
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });




        });
    };
})(jQuery);
