<?php

    try
    {
        $semaineTrilingua = array(
            array(1 => "Lundi", 2 => "Mardi", 3 => "Mercredi", 4 => "Jeudi", 5 => "Vendredi", 6 => "Samedi", 7 => "Dimanche"), 
            array(1 => "Monday", 2 => "Tuesday", 3 => "Wednesday", 4 => "Thursday", 5 => "Friday", 6 => "Saterday", 7 => "Sunday"),
            array(1 => "Mandaag", 2 => "Dinsdag", 3 => "Voensdag", 4 => "Donderdag", 5 => "Vrijdag", 6 => "Zaterdag", 7 => "Zondag")
            );
    
    }
    catch (Exception $exc)
    {
        die('Erreur : ' . $exc->getMessage());
    }

    echo json_encode($semaineTrilingua);
    
