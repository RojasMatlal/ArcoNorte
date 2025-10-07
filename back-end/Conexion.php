<?php

class Conexion{

    public static function conectar(){
        $con = new PDO("MYSQL:host=localhost;dbname=arconorte","root","")
        $con->exec("set name uft8");
        return $con;
    }

    public static function desconectar($con){
        $con = null;
    }
}