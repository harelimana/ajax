<?php
    try
    {
        $indexedWeek = [1 => "Lundi", 2 => "Mardi", 3 => "Mercredi", 4 => "Jeudi", 5 =>"Vendredi", 6 => "Samedi", 7 =>"Dimanche"];
        
     //   echo json_encode($cijfer);
    }
    catch (Exception $exc)
    {
        die('Erreur : ' . $exc->getMessage());
    }

    echo json_encode($indexedWeek);
    