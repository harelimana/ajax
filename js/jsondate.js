
$(document).ready(function () {
    $('#ecrire').click(function (e) {
        $.post('ajax.php', function (data) {
            var valeurs = JSON.parse(data);
            if (typeof valeurs !== 'object') {
                $('#tab').append('<tr></tr>');
                $('tr:last').append('<td>' + '</td>').text(valeurs.ddate);
          //      console.log(valeurs);
            } else {
                $('#tab').append('<tr></tr>');
                $('tr:last').append('<td>' + '</td>').text(valeurs.ddate);
          //      console.log(valeurs);
            }
        });
    });
});

