var week = []; //the array of the day names
var dayIndex = 0; //the index the week
var dayName = " "; // the day selected
var pattron = /[1-7]{1}/g; // a regex use for validating the read character 

// a function that returs the selected day according to the read number

function queljour(week, dayIndex) {
    var d = parseInt(dayIndex);
 //   pattron.compile(pattron); 
    if (pattron.exec(d) !== false) {
        dayName = week[d];
    } else {
        console.log("que se passe t-il ??");
         $('td:last').append('<p>' + '</p>').text(d);
        $('p:last').append('<p>' + '</p>').text("is an invalid number");
    }
    return dayName;
};

$(document).ready(function () {
    $('#lire').click(function (e) {
        $.post('ajaxsemaine.php', function (data) {
            var week = JSON.parse(data);
            dayIndex = $('#valeurs').val();
            dayname = queljour(week, dayIndex);
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