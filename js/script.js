//You only write document ready if you've linked jquery and your jquery file at the top of the page but if you've linked it right at the bottom just before the closing body tag then the jquery will run when the document is ready;

var main = function() {
        $("form").submit(function(event) {
                var $input = $(event.target).find("input");
                var comment = $input.val();

                if  ( comment != "" ) {
                        var html = $("<li>").text(comment);
                        html.prependTo("#comments");
                        $input.val("");
                }

                return false;
        });
};


$( document ).ready(main);












var Car = function() {
        this.wheels = 2;
        this.engines = 3;
        this.seats = 4;
};

var bmw;
 bmw =  new Car();

console.log(bmw);
