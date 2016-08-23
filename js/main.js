//variables

var v = parseInt(0); // variable d'incrément dont la valeur est mise à zéro au début
var result = parseInt(0); //variable de l'ID dans d'INPUT et dont sert l'affichage du LABEL
var inscope = true;

//fonction de validation du scope [0;10]

function scopetest(v) {
    if ((v >= 0) && (v <= 10)) {
        inscope = true;
    } else {
        inscope = false;
    }
    return inscope;
}


$('p').hide(); // the 'out of scope' error paragraph is hidden 


$(document).ready(function () {

    //la capture d'évenements lors du click
    $('#increment').click(function (e) {
        $('#result').val(v);
        inscope = scopetest(v); // appel au validateur de scope [0;10]
        if (inscope) {
            $('label').text(v);
            ++v;
        } else {
            $('#increment:input').prop('desabled', true);
            $('p').fadeIn('slow').delay('3000').fadeOut('slow'); // would like to fadein the 'out of scope' error paragraph 
        }
    });

    $('#decrement').click(function (e) {
        $('#result').val(v);
          inscope = scopetest(v); // appel au validateur de scope [0;10]
        if (inscope) {
            $('label').text(v);
            --v;
        } else {
            $('#decrement:input').prop('desabled', true);
            $('p').fadeIn('slow').delay('3000').fadeOut('slow'); // would like to fadein the 'out of scope' error paragraph 
        }
    });
    console.log(inscope);
});