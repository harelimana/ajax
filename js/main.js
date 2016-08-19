//variables

var v = parseInt(0); // variable d'incrément dont la valeur est mise à zéro au début
var result = parseInt(0); //variable de l'ID dans d'INPUT et dont sert l'affichage du LABEL
var inscope = true;

function scopetest(v) {
    if ((v >= 0) && (v <= 10)) {
        inscope = true;
    } else {
        inscope = false;
    }
    return inscope;
}

inscope = scopetest(v);
$('p').hide(); // the 'out of scope' error paragraph is hidden 

if (inscope) {
    $(document).ready(function () {

        //la capture d'évenements lors du click
        $('#increment').click(function (e) {
            $('#result').val(v);
            ++v;
            $('label').text(v);
        });

        $('#decrement').click(function (e) {
            $('#result').val(v);
            --v;
            $('label').text(v);
        });
        console.log(inscope);
    });
} else {
   
    $('input').prop('desabled', true);
    $('p').fadeIn('slow').delay('3000').fadeOut('slow'); // would like to fadein the 'out of scope' error paragraph
    
};

