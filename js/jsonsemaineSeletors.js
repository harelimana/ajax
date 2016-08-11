var week = {};
var dayIndex = 0;
var dayName = " ";
var pattron = /[1-7]/g;

/* ==== fonction de selection du jour et de validation du segment [lundi - dimanche] ==== */

function queljour(week, dayIndex) {
    var d = parseInt(dayIndex);
    var chosenWeek = week;
    console.log(d);
    if (pattron.exec(d) !== false) {  // lieu de validation du segement [1-7]
        dayName = chosenWeek[d];
    } else {
        console.log("invalid number !");
    }
    return dayName;
}

/* ==== fonction de matching entre la langue choisie et le tableau des jours dans cette langue  ==== */

function selectedWeek(week) {
    var myweek = week;
    var weekSelected = [];
    var langue = $("#language").val();
    if ((langue === "FR") || (langue === "fr")) {
        weekSelected = myweek[0];
    } else if ((langue === "EN") || (langue === "en")) {
        weekSelected = myweek[1];
    } else {
        weekSelected = myweek[2];
    }
    return weekSelected;
}

/* ==== espace d'appel à ajax et JSON ===== */

$(document).ready(function () {
    $('#lire').click(function (e) {
        $.post('ajaxsemaineSeletors.php', function (data) {
            var week = JSON.parse(data);
            $("select").change(selectedWeek);//appel de la fonction selectedWeek()
            var wk = selectedWeek(week); // c'est ici l'appel
            dayIndex = $('#valeurs').val(); //lecture dans l'imput de la valeur correpondant au jour souhaité 
            dayName = queljour(wk, dayIndex); //appel de la fonction de recherche dans un tableau associatif
            if (typeof dayIndex !== 'object') {
                $('#tab').append('<tr></tr>');
                $('tr:last').append('<td>' + '</td>').text(dayName);
            } else {
                $('#tab').append('<tr></tr>');
                $('tr:last').append('<td>' + '</td>').text(dayName);
            }
        });
    });
});