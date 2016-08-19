<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Page 1 - Placer les boutons</title>
        <link href="css/normalize.css" rel="stylesheet" type="text/css"/>
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>
        <link href="css/bootstrap-theme.css" rel="stylesheet" type="text/css"/>
        <link href="css/main.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <div>
            <div class="fl">
                <input type="button" value="+" id="increment" class="btn" class="fl"/>
            </div>
            <div class="fl">
                <label for name="result" id="result" value=0 class="btn labelbox">0</label>
            </div>
            <div class="fl">
                <input type="button" value="-" id="decrement" class="btn"/>
            </div>
            <div class="flc"></div>
            <div class="error"><p>Out of scope !</p></div>
        </div> 
        <script src="js/libs/jquery/jquery.js" type="text/javascript"></script>
        <script src="js/main.js" type="text/javascript"></script>
    </body>
</html>
