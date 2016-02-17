$(document).ready(function() {

    resize();

    /* 
     * Makes the link paths work by redirecting the homepage
     * to the absolute path of the homepage, rather than having
     * .htaccess just display index.php but not actually navigating
     * to it.
     */
    if (window.location.href === "http://arfwm.org/") {
        window.location.replace("http://arfwm.org/en/index.php");
    }

    // Keeps the hover color of "Getting Help" when the focus is
    // on one of the dropdown elements
    $(".dropdown-menu, .dropdown-toggle").hover(
        function() {
            $(".dropdown-toggle").css("background-color", "#F4B383");
        },
        function() {
            $(".dropdown-toggle").css("background-color", "#D86E20");
        }
    );

    /*
     * Returns the array of quotes corresponding
     * to the loaded page's html language code
     */
    function randomQuote() {
        var lang = $("html").attr("lang");
        var quoteArrEn = [
            "\"Sometimes people don’t understand and don’t really care to because they don’t have to deal with it day to day. But with your help I am able to make a positive future for myself and my five year old girl, and not have to worry about an abusive future. Once again, thank you.\"",
            "\"It's the cruelest form of inequality to say that women who can afford an abortion are allowed to make choices about their bodies, while those choices are withheld from others.\"",
            "\"We must never return to the old days of the back alley abortionists and the criminalization of birth control.\"",
            "\"If someone can't afford an abortion, then it isn't available.\"",
            "\"Every woman and girl should be able to have only the children that she wants to have. The Abortion Rights Fund of Western Massachusetts funds choices that make this vision reality.\"",
            "We are a community-based, all-volunteer organization dedicated to overcoming the economic barriers to abortion care. Our committed volunteers give their time and individual donors give their financial support because they know that without money, a right is meaningless.",
            "\"Working with the fund is a daily reminder that, although it is over 35 years after Roe v. Wade, so many low-income women could not get the abortions they need without our help. I am sad that we have to exist, and proud that we do.\""
        ]

        var quoteArrEs = [
            "\"A veces la gente no entiende y no quiere entender porque no tienen que lidiar con ello cada día. Con su ayuda he podido crear un futuro positivo para mi y para mi hija de cinco años, y no tendré que preocuparme acerca de un futuro abusivo. De nuevo, gracias.\"",
            "\"Es la forma mas cruel de desigualdad, cuando una mujer que puede pagar por un aborto puede hacer decisiones sobre su cuerpo, mientras esas decisiones no son presentadas a todos.\"",
            "\"Nunca debemos regresar a los viejos tiempos de abortos de callejón y la penalización de anticonceptivos.\"",
            "\"Sabemos que si alguien no puede pagar por un aborto, entonces no es una opción.\"",
            "\"Toda mujer y niña debe poder tener solo los hijos que desea. El ARFWM apoya decisiones que hacen esta visión una realidad.\"",
            "Somos una organización voluntaria, basada en la comunidad, dedicada a superar las barreras económicas al cuidado medico relacionado con el aborto. Nuestros voluntarios y donadores dan su tiempo y apoyo porque están comprometidos ya que saben que sin dinero, cualquier derecho no tiene significado.",
            "\"Trabajar con ARFWM me recuerda diario que aunque ya pasaron 35 años desde Roe v. Wade, muchas mujeres de bajos ingresos no podrían obtener un aborto sin nuestra ayuda. Me da tristeza que necesitemos existir, y orgullo poder ayudar.\""
        ]

        var quote;

        if (lang === "es") {
            quote = randomArrElement(quoteArrEs);
        } else {
            quote = randomArrElement(quoteArrEn);
        }

        $("#quote").text(quote); 
        checkQuote();
    }



    /*
     * Takes an array as a parameter, returns
     * a random element from that array
     */
    function randomArrElement(arr) {
        var num = Math.floor(Math.random() * arr.length);
        return arr[num];
    }

    /*
     * Sets the links for the footer language switcher. This will
     * only work if the URL is arfwm.org, not if it's arfwm.dev as
     * it is in my local development environment.
     */
    function getLangURLs() {
        var page = window.location.href;
        var opLangURL;
        var lang = $("html").attr("lang");
        
        /* 
         * The first case is for the location http://arfwm.org/,
         * which is actually the English index.php page,
         * but the URL won't reflect that so I'm hardcoding
         * the language switcher for that URL.
         */
        if (page === "http://arfwm.org/") {
            opLangURL = "http://arfwm.org/es/index.php";
            $("#esp").attr("href", opLangURL);
        } else if (lang === "en") {
            opLangURL = switchURLLang(lang, "es");
            $("#esp").attr("href", opLangURL);
        } else if (lang === "es") {
            opLangURL = switchURLLang(lang, "en");
            $("#eng").attr("href", opLangURL);
        }

    }

    /*
     * Takes a language code and a replacement language code and
     * replaces any instance of the initial language code in
     * the current URL with the replacement language code
     */
    function switchURLLang(lang, replaceLang) {
        var page = window.location.href;
        return page.substring(0, page.indexOf(lang)) + replaceLang + page.substring(page.indexOf(lang) + lang.length);
    }

    randomQuote();
    getLangURLs();

});

// On window resize event
$(window).resize(function() {
    resize();
    checkQuote();
});

// Makes the left column at least as tall as the right column
function resize() {
    if ($(".col-xs-9").height() > $("#col1").height()) {
        $("#col1").height($(".col-xs-9").height());
    }
}

// If the quote extends beyond the bottom of the column, get rid of the quote
function checkQuote() {
    if (document.getElementById("quote").getBoundingClientRect().bottom > document.getElementById("col1").getBoundingClientRect().bottom) {
        $("#quote").text("");
    }
}
