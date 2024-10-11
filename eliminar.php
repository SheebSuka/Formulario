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

$idEliminar = $_GET['id'];

//Eliminar el registro
$query = "DELETE FROM users WHERE id = '$idEliminar'";

if (mysqli_query($conn, $query)) {
    # code...
    echo ' Registro eliminado con exito :D';
} else {
    echo 'Error al eliminar el regitro: ' . mysqli_error($conn);
}

//Cerramos conexion
mysqli_close($conn);
?>