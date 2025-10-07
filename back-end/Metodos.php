<?php

class Metodos extends Conexion{

    public function select_query($sql){
        $con = Conexion::conectar();
        $query = $con->prepare($sql);
        $query->execute();
        $result = $query->fetchAll();
        return $result;
    }
} 