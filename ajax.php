<?php

    /* try {
      $datetime = new date();
      echo json_encode($datetime);
      }
      catch(Exception $exc) {
      die('Erreur : ' . $exc->getMessage());
      }
     */
    $tab = array('ddate' => date("Y-m-d H:i:s"));
    echo json_encode($tab);
    