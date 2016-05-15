var anzahl_bilder;
var anzahl_container;
var index = 0;
var bildbreite = $(this).width();
var groesse = "_small";

console.log(bildbreite);
// Zähle die Anzahl der Dateien im Ordner /bg
// Die Anzahl wird durch 3 geteilt
// da jeweils 3 Versionen jedes Bildes existieren
$.get('img/count.php', function (data) {
    anzahl_bilder = data;
});

// Setze Größe der Bilder fest die geladen werden sollen
if (bildbreite >= 1200) {
    groesse = "_large";
} else if (bildbreite >= 992) {
    groesse = "_medium";
}

// Befülle alle Elemente mit Klassenname .parallax mit den Bildern
$('.parallax').each(function () {
    if (index === anzahl_bilder) {
        index = 1;
    } else {
        index++;
    }

    $(this).html('<img src="img/bg/' 
            + index 
            + groesse 
            + '.jpg" alt="Hintergrundbild für Parallax Effekt">)');
});