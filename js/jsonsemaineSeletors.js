var week = {};
var dayIndex = 0;
var dayName = " ";
var pattron = /[1-7]/g;
var error = "";

/* ==== fonction de selection du jour et de validation du segment [lundi - dimanche] ==== */

function queljour(week, dayIndex) {
    var d = parseInt(dayIndex);
    var chosenWeek = week;
 
    if (pattron.exec(d) !== false) {  // lieu de validation du segement [1-7]
        dayName = chosenWeek[d];
    } else {
        error = "invalid number !";
    }
    return dayName;
}

/* ==== espace d'appel à ajax et JSON ===== */

$(document).ready(function () {
    // ajouter (déplacer) ici l'appel à la fonction selected
    $('#lire').click(function (e) {
        e.preventDefault();
        var $this = $(this);
        var langue = $('#language').val();
    
        $.post('ajaxsemaineSelectorsBeta.php',{lang: langue}, function (data) { // passer en paramètre la langue choisie
            var week = JSON.parse(data); // ce sera cette semaine-là qui est revoyée
           
            dayIndex = $('#valeurs').val(); //lecture dans l'imput de la valeur correpondant au jour souhaité 
            dayName = queljour(week, dayIndex); //appel de la fonction de recherche dans un tableau associatif
            if (typeof dayIndex !== 'object') {
                $('#tab').append('<tr></tr>');
                $('tr:last').append('<td>' + error + '</td>').text(dayName);
            } else {
                $('#tab').append('<tr></tr>');
                $('tr:last').append('<td>' + '</td>').text(dayName);
            }
        });
    });
});
