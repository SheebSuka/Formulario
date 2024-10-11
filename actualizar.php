<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$servidor = 'localhost';
$user = 'root';
$password = '';
$database = "formulario_db";

//Conectar a la base de datos
$conn = mysqli_connect($servidor, $user, $password, $database);

if (!$conn) {
    die("Error de conexión: " . mysqli_connect_error());
    echo 'no :(';
}

//Obtener el ID
$idActualizar = $_GET['id'];

// Obtener el nuevo nombre del registro.
$nombreActualizar = $_GET['nombre'];

$query = "UPDATE users SET name = '$nombreActualizar' WHERE id = '$idActualizar'";

if (mysqli_query($conn, $query)) {
    # code...
    echo "Registro hecho con exito :D";
} else {
    echo "Error al actualizar el registro: " . mysqli_error($conn);
}
