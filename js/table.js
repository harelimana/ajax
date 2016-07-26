
var valeurs = "";
$(document).ready(function () {
    $('#ecrire').click(function (e) {
        $('#tab').append('<tr></tr>');
        valeurs = $('#valeurs').val();
        $('tr:last').append('<td>'+'</td>').text(valeurs);
        console.log(valeurs);
    });
});


