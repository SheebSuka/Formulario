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

//Leer datos tirados por FETCH
$input = file_get_contents('php://input');
$data = json_decode($input, true);

//Verficacion si los datos entraron o nah
if (isset($data['name']) && isset($data['lastName']) && isset($data['gender']) && isset($data['date'])) {
    # balls
    $name = mysqli_real_escape_string($conn, $data['name']);
    $lastName = mysqli_real_escape_string($conn, $data['lastName']);
    $gender = mysqli_real_escape_string($conn, $data['gender']);
    $date = mysqli_real_escape_string($conn, $data['date']);


    // Insertar datos en la tabla
    $insertData = "INSERT INTO users (name, lastName, gender, date) VALUES ('$name', '$lastName', '$gender', '$date')";

    // Ejecutar la consulta
    if (mysqli_query($conn, $insertData)) {
        echo "Datos insertados correctamente";
    } else {
        echo "Error al insertar datos: " . mysqli_error($conn);
    }
} else {
    echo "No se recibieron todos los datos necesarios.";
}

// Cerrar la conexión
mysqli_close($conn);
    
?>