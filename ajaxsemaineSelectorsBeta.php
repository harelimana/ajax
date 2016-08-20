<?php

    include_once 'indexjson6.php';
    $choix = isset($_GET["language"]) ? $_GET["language"] : "";
    
//the three variables related to the required week 

    $french       = array(1 => "Lundi", 2 => "Mardi", 3 => "Mercredi", 4 => "Jeudi", 5 => "Vendredi", 6 => "Samedi", 7 => "Dimanche");
    $english      = array(1 => "Monday", 2 => "Tuesday", 3 => "Wednesday", 4 => "Thursday", 5 => "Friday", 6 => "Saterday", 7 => "Sunday");
    $dutch        = array(1 => "Maandag", 2 => "Dinsdag", 3 => "Voensdag", 4 => "Donderdag", 5 => "Vrijdag", 6 => "Zaterdag", 7 => "Zondag");
    $selectedweek = array();

// the function through which the week is selected

    function choixSemaine($choix)
    {
        switch ($choix)
        {
            case 'FR':
                $selectedweek = $french;
                ;
            case 'EN':
                $selectedweek = $english;
                ;
            case 'NL':
                $selectedweek = $dutch;
                ;
            default:
                $selectedweek = $english;
                ;
        }
        return $choix;
    }

    // the try and catch exceptions

    try
    {
        $selected = choixSemaine($choix);
    }
    catch (Exception $exc)
    {
        die('Erreur : ' . $exc->getMessage());
    }

    echo json_encode($selectedweek);
    