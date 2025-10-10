<?php

include_once 'usuarios.php';

//$usuarios = new Usuarios();

$nombreServicio = $_GET['nombreservicio'];

switch ($nombreServicio){
    case 'mostrarDatos':
        echo json_encode($usuarios->mostrarDatos());
        break;
}