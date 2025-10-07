<?php

class Usuarios extends Metodos{
    public function mostrarDatos(){
        $sql = "SELECT * FROM usuarios";
        $result = $this->select_query($sql);
        return $result;
   }
}