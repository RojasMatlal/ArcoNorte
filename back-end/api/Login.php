<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once 'Connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    $email = $data['email'] ?? '';
    $password = $data['password'] ?? '';
    
    try {
        $db = Conexion::conectar();
        $stmt = $db->prepare("SELECT * FROM usuarios WHERE email_usuario = ? AND pass_usuario = ?");
        $stmt->execute([$email, $password]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($user) {
            if ($user['estatus_usuarios'] == 0) {
                echo json_encode([
                    'success' => false,
                    'message' => 'Este usuario ha sido deshabilitado'
                ]);
            } else {
                // Remover la contraseña del response
                unset($user['pass_usuario']);
                
                echo json_encode([
                    'success' => true,
                    'user' => $user,
                    'message' => 'Login exitoso'
                ]);
            }
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Usuario o contraseña incorrectos'
            ]);
        }
    } catch(Exception $e) {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Error del servidor'
        ]);
    }
}
?>