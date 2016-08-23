<?php

    $taal = isset($_POST['lang']) ? $_POST['lang'] : "en"; // $taal receives the choice of language from the selector <select><option>

    // one of the following arrays is choosen depending to the content of the variable $taal
    
    $french  = array(1 => "Lundi", 2 => "Mardi", 3 => "Mercredi", 4 => "Jeudi", 5 => "Vendredi", 6 => "Samedi", 7 => "Dimanche");
    $english = array(1 => "Monday", 2 => "Tuesday", 3 => "Wednesday", 4 => "Thursday", 5 => "Friday", 6 => "Saterday", 7 => "Sunday");
    $dutch   = array(1 => "Maandag", 2 => "Dinsdag", 3 => "Voensdag", 4 => "Donderdag", 5 => "Vrijdag", 6 => "Zaterdag", 7 => "Zondag");

// the function through which the week is selected

    function choixSemaine($taal,$french, $english, $dutch)
    {
        $choice = $taal;
        $fr = $french;
        $en = $english;
        $du = $dutch;
        
        
        switch ($choice)
        {
            case "fr":
                $selectedweek = $fr;
                break;
            case "en":
                $selectedweek = $en;
                break;
            case "nl":
                $selectedweek = $du;
                break;
            default:
                $selectedweek = $en;
                break;
        }
        return $selectedweek;
    }

    // the try and catch exceptions

    try
    {
        $selectedweek = choixSemaine($taal,$french, $english, $dutch);
    }
    catch (Exception $exc)
    {
        die('Erreur : ' . $exc->getMessage());
    }

    echo json_encode($selectedweek);
    