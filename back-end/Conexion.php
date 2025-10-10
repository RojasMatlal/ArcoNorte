<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

class Conexion {
    private static $instancia = null;
    
    public static function conectar() {
        if (self::$instancia === null) {
            try {
                self::$instancia = new PDO(
                    "mysql:host=localhost;dbname=arconorte;charset=utf8", 
                    "root", 
                    ""
                );
                self::$instancia->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch(PDOException $e) {
                http_response_code(500);
                echo json_encode(["error" => "Error de conexión: " . $e->getMessage()]);
                exit();
            }
        }
        return self::$instancia;
    }
}
?>