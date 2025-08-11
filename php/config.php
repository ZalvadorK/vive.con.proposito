<?php
// Datos para conectar con la base de datos MySQL
$servername = getenv("mysql.railway.internal"); // Servidor
$username = getenv("root"); // Usuario de MySQL
$password = getenv("xBcXIMlCrrQWqDgyYijzeSIXuvhSbTHM"); // Contraseña de MySQL
$dbname = getenv("resultados"); //Nombre de la base de datos
$puerto = getenv("3306"); //Puerto MySQL

// Crear conexión
$conn = new mysqli($servername, $username, $password, $$dbname, $puerto);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
