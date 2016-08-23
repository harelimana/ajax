<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Page 6 - Choix de jour selon la langue</title>
        <link href="css/normalize.css" rel="stylesheet" type="text/css"/>
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>
        <link href="css/bootstrap-theme.css" rel="stylesheet" type="text/css"/>
        <link href="css/main.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <div class="container">
            
            <input type="button" value="Lire un chiffre entre (1-7)" id="lire" class="btn"/>
            <input type="number" id="valeurs" name="valeurs" value=0 height="20" width="50"/>
            <select id="language">
                <option value="fr">FR</option>
                <option value="en">EN</option>
                <option value="nl">NL</option>
            </select>
            <table id="tab"><th><hr>Valeurs<hr></th></table>
        </div>
        <script src="js/libs/jquery/jquery.js" type="text/javascript"></script>
        <script src="js/jsonsemaineSeletors.js" type="text/javascript"></script>
    </body>
</html>