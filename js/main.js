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

    randomQuote();

});

function randomQuote() {
    var quoteArr = [
        "\"Sometimes people don’t understand and don’t really care to because they don’t have to deal with it day to day. But with your help I am able to make a positive future for myself and my five year old girl, and not have to worry about an abusive future. Once again, thank you.\"",
        "\"It's the cruelest form of inequality to say that women who can afford an abortion are allowed to make choices about their bodies, while those choices are withheld from others.\"",
        "\"We must never return to the old days of the back alley abortionists and the criminalization of birth control.\"",
        "\"If someone can't afford an abortion, then it isn't available.\"",
        "\"Every woman and girl should be able to have only the children that she wants to have. The Abortion Rights Fund of Western Massachusetts funds choices that make this vision reality.\"",
        "We are a community-based, all-volunteer organization dedicated to overcoming the economic barriers to abortion care. Our committed volunteers give their time and individual donors give their financial support because they know that without money, a right is meaningless.",
        "\"Working with the fund is a daily reminder that, although it is over 35 years after Roe v. Wade, so many low-income women could not get the abortions they need without our help. I am sad that we have to exist, and proud that we do.\""
    ]

    var num = Math.floor(Math.random() * 7) + 1;

    $("#quote").text(quoteArr[num]); 
}
