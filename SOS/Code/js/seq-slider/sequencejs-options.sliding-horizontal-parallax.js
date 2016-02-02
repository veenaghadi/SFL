$(document).ready(function(){
    var options = {
        autoPlay: true,
        nextButton: true,
        prevButton: true,
        preloader: true,
        navigationSkip: false,
        autoPlayDelay: 500,
    };
    var sequence = $("#sequence").sequence(options).data("sequence");

    sequence.afterLoaded = function(){
        $(".sequence-prev, .sequence-next").fadeIn(300);
    }
});