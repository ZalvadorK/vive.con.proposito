<?php
// Datos para conectar con la base de datos MySQL
$servername = mysql.railway.internal; // Servidor
$username = root; // Usuario de MySQL
$password = xBcXIMlCrrQWqDgyYijzeSIXuvhSbTHM; // Contraseña de MySQL
$dbname = railway; //Nombre de la base de datos
$puerto = 3306; //Puerto MySQL

// Crear conexión
$conn = new mysqli($servername, $username, $password, $$dbname, $puerto);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
