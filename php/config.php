<?php
// Datos para conectar con la base de datos MySQL
$servername = getenv("DB_HOST"); // Servidor
$username = getenv("DB_USERNAME"); // Usuario de MySQL
$password = getenv("DB_PASSWORD"); // Contraseña de MySQL
$dbname = getenv("DB_DATABASE"); //Nombre de la base de datos
$puerto = getenv("DB_PORT"); //Puerto MySQL

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname, $puerto);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
