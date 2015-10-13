$(document).ready(function() {
    if ($(".col-xs-9").height() > $("#col1").height()) {
        $("#col1").height($(".col-xs-9").height());
    }

    $(".dropdown-menu, .dropdown-toggle").hover(
        function() {
            $(".dropdown-toggle").css("background-color", "#F4B383");
        },
        function() {
            $(".dropdown-toggle").css("background-color", "#D86E20");
        }
    );

});
