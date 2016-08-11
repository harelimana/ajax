var week = [];
var dayIndex = 0;
var dayName = " ";
var pattron = /[1-7]/g;
function queljour(week, dayIndex) {
    var d = parseInt(dayIndex);
    //   console.log(d);
    if (pattron.exec(d) !== false) {
        dayName = week[d];
    } else {
        console.log("invalid number !");
    }
    return dayName;
}
$(document).ready(function () {
    $('#lire').click(function (e) {
        $.post('ajaxsemaine.php', function (data) {
            var week = JSON.parse(data);
       //     console.log(week);
            day = $('#valeurs').val();
      //      console.log(dayIndex);
            dayname = queljour(week, dayIndex);
       //     console.log(dayName);
            if (typeof dayIndex !== 'object') {
                $('#tab').append('<tr></tr>');
                $('tr:last').append('<td>' + '</td>').text(dayName);
       //         console.log(dayName);
            } else {
                $('#tab').append('<tr></tr>');
                $('tr:last').append('<td>' + '</td>').text(dayName);
        //        console.log(dayName);
            }
        });
    });
});