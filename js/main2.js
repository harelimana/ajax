
var champs = "";
$(document).ready(function () {
    $("#ecrire").click(function (e) {
        champs = $("#champs").val();
        $('#data').text(champs);
    });
});
