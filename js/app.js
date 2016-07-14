function parallaxEffekt() {
    var anzahl_bilder = 0;
    var bildbreite = $(this).width();
    var groesse = "_small";
    var bild;
    var last;

// Zähle die Anzahl der Dateien im Ordner /bg
// Die Anzahl wird durch 3 geteilt
// da jeweils 3 Versionen jedes Bildes existieren
    var getData = $.get('img/count.php', function (data) {
        anzahl_bilder = data;
    });

// Setze Größe der Bilder fest die geladen werden sollen
    if (bildbreite > 992) {
        groesse = "_large";
    } else if (bildbreite > 600) {
        groesse = "_medium";
    }

// Warte bis get Request ein Ergebnis geliefert hat
    $.when(getData).done(function () {
        // Befülle alle Elemente mit Klassenname .parallax mit den Bildern
        $('.parallax').each(function (index) {
            last = bild;
            // Sicherstellen, dass Bilder nicht zweimal nacheinander auftauchen
            while (last === bild) {
                bild = parseInt(Math.random() * (anzahl_bilder) + 1);
            }

            $(this).html('<img src="img/bg/' +
                    bild +
                    groesse +
                    '.jpg" alt="Hintergrundbild für Parallax Effekt">)');
        });

        // Hero Parallax soll auch Hero als Bild erhalten
        $('#hero').children('.parallax').html('<img src="img/hero' +
                groesse +
                '.jpg" alt="Sonnenenergie Neckar-Alb e.V.">)');

        // Parallax Effekt aus Materialize Bibliothek
        $('.parallax').parallax();
    });
}

function navActivate() {
    $('.nav-activator').click(function () {
        var ulItem = $(this).parent().children('ul');
        var openLikeHell = ulItem.hasClass('active');

        // Schließe alle Untermenüs
        $('.nav-activator').each(function () {
            $(this).parent().children('ul').removeClass('active');
        });

        // Und öffne dann das ausgewählte Menü sofern es nicht schon offen ist
        if (!openLikeHell) {
            ulItem.addClass('active');
        }
    });

}

function newsActivate() {
    $('.news-card').click(function () {
        var newsItem = $(this);
        if (!(newsItem.hasClass('active'))) {
            newsItem.addClass('active');
            newsItem.parent().removeClass('l6');
            newsItem.removeClass('waves-effect');
            newsItem.children('.card-content').children('.close').addClass('active');
            $("html, body").stop().animate({scrollTop: newsItem.offset().top}, '500', 'swing');
        }
    });

    $('.close').click(function (e) {
        var newsItem = $(this).parent('.card-content').parent('.news-card');
        e.stopPropagation();
        newsItem.removeClass('active');
        newsItem.parent().addClass('l6');
        newsItem.addClass('waves-effect');
        $(this).removeClass('active');
    });
}

function autoScroller() {
    if (window.location.href.indexOf("#") > -1) {
        var id = window.location.hash.substr(1);
        scrollTo(id);
    }

    $('a').click(function () {
        if($(this).attr('href').indexOf("#") === 0) {
            scrollTo($(this).attr('href').substr(1));
        }
    });
}

function scrollTo(id) {
    $("#" + id).click();
    $("html, body").stop().animate({scrollTop: $("#" + id).offset().top}, '500', 'swing');
}


$(document).ready(function () {
    parallaxEffekt();
    navActivate();
    newsActivate();
    autoScroller();
});