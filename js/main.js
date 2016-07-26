//variables

var v = parseInt(0); // variable d'incrément dont la valeur est mise à zéro au début
var result = parseInt(0); //variable de l'ID dans d'INPUT et dont sert l'affichage du LABEL

// fonctions d'itération

function addition(v) {
    return v++;
}
function subtraction(v) {
    return v--;
}
$(document).ready(function () {
    var va = addition(v);

    console.log(va + ' alex');
    //la capture d'évenements lors du click
    $('#increment').click(function (e) {
         va++;
        $(':input').val(va);
        console.log(va + ' alex');
    });

    $('#decrement').click(function (e) {
         va--;
        $(':input').val(va);
        console.log(va + ' alex');
    });
});

