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
                '.jpg" alt="Hintergrundbild für Parallax Effekt">)');

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

parallaxEffekt();
navActivate();