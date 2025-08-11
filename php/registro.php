<?php
include "config.php";

// Leer datos JSON enviados desde JS
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo "No se recibieron datos";
    exit;
}

// Extraer datos
$respuestas = json_encode($data['respuestas']);  // guardamos array como JSON string
$puntuaciones = $data['puntuaciones'];

// Preparar variables con tipo seguro
$honestidad = intval($puntuaciones['honestidad']);
$respeto = intval($puntuaciones['respeto']);
$responsabilidad = intval($puntuaciones['responsabilidad']);
$empatia = intval($puntuaciones['empatia']);
$justicia = intval($puntuaciones['justicia']);
$generosidad = intval($puntuaciones['generosidad']);
$perseverancia = intval($puntuaciones['perseverancia']);
$gratitud = intval($puntuaciones['gratitud']);
$tolerancia = intval($puntuaciones['tolerancia']);
$humildad = intval($puntuaciones['humildad']);

// Preparar la consulta
$stmt = $conn->prepare("INSERT INTO resultados 
    (respuestas, honestidad, respeto, responsabilidad, empatia, justicia, generosidad, perseverancia, gratitud, tolerancia, humildad) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

$stmt->bind_param("siiiiiiiiii", $respuestas, $honestidad, $respeto, $responsabilidad, $empatia, $justicia, $generosidad, $perseverancia, $gratitud, $tolerancia, $humildad);

if ($stmt->execute()) {
    echo "Datos guardados correctamente";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
