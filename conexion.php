<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, DELETE, GET");
header("Access-Control-Allow-Headers: Content-Type");

$servidor = 'localhost';
$user = 'root';
$password = '';
$database = "formulario_db";

// Conectar a la base de datos
$conn = mysqli_connect($servidor, $user, $password, $database);

if (!$conn) {
    die("Error de conexión: " . mysqli_connect_error());
}

// DELETE
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $id = $_GET['id'];
    $eliminar = "DELETE FROM users WHERE id = '$id'";

    // Ejecutar la consulta
    if (mysqli_query($conn, $eliminar)) {
        echo "Registro eliminado correctamente";
    } else {
        echo "Error al eliminar registro: " . mysqli_error($conn);
    }
    mysqli_close($conn);
    exit(); // Termina aquí si se realizó la eliminación
}

// UPDATE
// Verificar si el método HTTP es POST para actualizar un registro
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'] ?? null;
    $name = $_POST['name'] ?? null;

    if ($id && $name) {
        $id = mysqli_real_escape_string($conn, $id);
        $name = mysqli_real_escape_string($conn, $name);

        $updateQuery = "UPDATE users SET name = '$name' WHERE id = '$id'";

        if (mysqli_query($conn, $updateQuery)) {
            echo "Registro actualizado correctamente";
        } else {
            echo "Error al actualizar registro: " . mysqli_error($conn);
        }
    } else {
        echo "Falta el ID o el nuevo nombre para actualizar.";
    }
}

// GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query = "SELECT * FROM users"; // Ajusta "users" al nombre de tu tabla si es diferente
    $result = mysqli_query($conn, $query);

    $rows = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }

    // Devolver los datos en formato JSON
    header('Content-Type: application/json');
    echo json_encode($rows);
    mysqli_close($conn);
    exit(); // Termina la ejecución tras devolver los datos
}

// Si no es DELETE o GET, se asume que es POST para inserción de datos
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Verificar si se recibieron todos los datos necesarios para insertar
if (isset($data['name']) && isset($data['lastName']) && isset($data['gender']) && isset($data['date'])) {
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
}

// Cerrar la conexión
mysqli_close($conn);
?>
