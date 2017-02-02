$(document).ready(function($) {
    $('.myTweets').owTweets();
});

/**
 * owTweets - jQuery plugin
 */
(function($) {
    $.fn.owTweets = function(options) {
        var defaults = {
            "url": "",
            "nb_tweets": 5,
            "contener_class": 'my-tweets',
            "delay": 7
        };
        var parametres = $.extend(defaults, options);

        return this.each(function() {
            //Build a query
            var queryUrl = 'https://api.twitter.com/1.1/search/tweets.json?q';
            console.log('url : ' + queryUrl);



        });
    };
})(jQuery);
