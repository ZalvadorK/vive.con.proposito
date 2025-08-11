// Valores que vamos a evaluar
var valores = {
    honestidad: "Honestidad - Actuar con sinceridad y transparencia",
    respeto: "Respeto - Valorar y considerar a otras personas",
    responsabilidad: "Responsabilidad - Cumplir compromisos y asumir consecuencias",
    empatia: "Empatía - Comprender y compartir sentimientos de otros",
    justicia: "Justicia - Actuar de manera equitativa y defender lo correcto",
    generosidad: "Generosidad - Dar y compartir sin esperar nada a cambio",
    perseverancia: "Perseverancia - Mantener el esfuerzo ante las dificultades",
    gratitud: "Gratitud - Reconocer y apreciar lo bueno en la vida",
    tolerancia: "Tolerancia - Aceptar y respetar las diferencias",
    humildad: "Humildad - Reconocer limitaciones y aprender de otros"
};

// Preguntas del quiz
var preguntas = [
    {
        pregunta: "¿Cómo reaccionas cuando cometes un error?",
        opciones: [
            { texto: "Trato de ocultarlo para evitar problemas", honestidad: 0, respeto: 1 },
            { texto: "Lo reconozco solo si me preguntan directamente", honestidad: 1, responsabilidad: 1 },
            { texto: "Busco a alguien más para culpar", honestidad: 0, responsabilidad: 0 },
            { texto: "Lo admito inmediatamente y busco solucionarlo", honestidad: 3, responsabilidad: 2 }
        ]
    },
    {
        pregunta: "Cuando alguien tiene una opinión muy diferente a la tuya, ¿qué haces?",
        opciones: [
            { texto: "Discuto hasta demostrar que tengo razón", respeto: 0, empatia: 0, tolerancia: 0 },
            { texto: "Escucho atentamente y trato de entender su perspectiva", respeto: 3, empatia: 2, tolerancia: 3 },
            { texto: "Cambio de tema para evitar conflictos", respeto: 1, empatia: 1, tolerancia: 1 },
            { texto: "Me molesto y dejo de hablar con esa persona", respeto: 0, empatia: 0, tolerancia: 0 }
        ]
    },
    {
        pregunta: "¿Cómo manejas tus compromisos y promesas?",
        opciones: [
            { texto: "Cumplo solo si me conviene", responsabilidad: 0, honestidad: 0 },
            { texto: "Trato de cumplir, pero a veces se me olvida", responsabilidad: 1, honestidad: 1 },
            { texto: "Prefiero no hacer promesas para evitar problemas", responsabilidad: 1, honestidad: 2 },
            { texto: "Siempre cumplo, incluso si es difícil", responsabilidad: 3, honestidad: 2 }
        ]
    },
    {
        pregunta: "Cuando ves a alguien en dificultades, ¿cuál es tu primera reacción?",
        opciones: [
            { texto: "Inmediatamente pienso en cómo puedo ayudar", empatia: 3, generosidad: 2 },
            { texto: "Pienso que no es mi problema", empatia: 0, generosidad: 0 },
            { texto: "Siento pena pero no sé qué hacer", empatia: 2, generosidad: 1 },
            { texto: "Evito la situación para no involucrarme", empatia: 0, generosidad: 0 }
        ]
    },
    {
        pregunta: "¿Cómo actúas cuando presencias una injusticia?",
        opciones: [
            { texto: "Me molesto pero no hago nada", justicia: 1, honestidad: 1 },
            { texto: "Pienso que no es mi responsabilidad", justicia: 0, responsabilidad: 0 },
            { texto: "Intervengo o denuncio la situación", justicia: 3, honestidad: 2 },
            { texto: "Depende de si me afecta directamente", justicia: 1, empatia: 0 }
        ]
    },
    {
        pregunta: "¿Qué te motiva más a ayudar a otros?",
        opciones: [
            { texto: "El simple deseo de hacer el bien", generosidad: 3, empatia: 2 },
            { texto: "Espero que me ayuden cuando lo necesite", generosidad: 1, justicia: 1 },
            { texto: "Solo si obtengo algo a cambio", generosidad: 0, empatia: 0 },
            { texto: "Para que otros piensen bien de mí", generosidad: 1, honestidad: 0 }
        ]
    },
    {
        pregunta: "Cuando enfrentas un obstáculo grande, ¿qué haces?",
        opciones: [
            { texto: "Me doy por vencido rápidamente", perseverancia: 0, responsabilidad: 0 },
            { texto: "Pido ayuda a otros para resolverlo", perseverancia: 1, empatia: 2, humildad: 2 },
            { texto: "Espero que el problema se resuelva solo", perseverancia: 0, responsabilidad: 0 },
            { texto: "Busco diferentes formas de superarlo hasta lograrlo", perseverancia: 3, responsabilidad: 2 },
        ]
    },
    {
        pregunta: "¿Cómo reaccionas cuando alguien te hace un favor?",
        opciones: [
            { texto: "Agradezco sinceramente y busco la forma de corresponder", gratitud: 3, generosidad: 2 },
            { texto: "Pienso que era su obligación hacerlo", gratitud: 0, respeto: 0 },
            { texto: "Digo gracias pero no le doy mucha importancia", gratitud: 1, respeto: 1 },
            { texto: "Me siento incómodo y trato de devolver el favor inmediatamente", gratitud: 2, responsabilidad: 1 }
        ]
    },
    {
        pregunta: "¿Cómo describes tu actitud hacia la vida en general?",
        opciones: [
            { texto: "Siempre pienso en lo que me falta", gratitud: 0, empatia: 0 },
            { texto: "Agradezco las oportunidades y experiencias que tengo", gratitud: 3, empatia: 1 },
            { texto: "Algunos días estoy agradecido, otros no", gratitud: 1, empatia: 1 },
            { texto: "Creo que merezco más de lo que tengo", gratitud: 0, respeto: 0 }
        ]
    },
    {
        pregunta: "¿Cómo reaccionas cuando alguien critica tu trabajo?",
        opciones: [
            { texto: "Me defiendo y justifico mi trabajo", respeto: 0, honestidad: 1, humildad: 0 },
            { texto: "Me molesto pero no digo nada", respeto: 1, empatia: 0, humildad: 1 },
            { texto: "Pienso que no saben lo que dicen", respeto: 0, empatia: 0, humildad: 0 },
            { texto: "Escucho la crítica y trato de mejorar", respeto: 3, responsabilidad: 2, humildad: 3 }
        ]
    },
    {
        pregunta: "¿Cómo te comportas cuando tienes que trabajar en equipo?",
        opciones: [
            { texto: "Trato de liderar y dirigir el proyecto", responsabilidad: 2, honestidad: 1 },
            { texto: "Hago mi parte pero no me involucro mucho", responsabilidad: 1, tolerancia: 1 },
            { texto: "Colaboro y escucho las ideas de todos", respeto: 3, tolerancia: 2, humildad: 2 },
            { texto: "Prefiero trabajar solo", tolerancia: 0, humildad: 0 }
        ]
    },
    {
        pregunta: "¿Qué haces cuando alguien te cuenta sus problemas personales?",
        opciones: [
            { texto: "Escucho atentamente y ofrezco mi apoyo", empatia: 3, generosidad: 2, respeto: 2 },
            { texto: "Trato de dar consejos para solucionarlo", empatia: 2, generosidad: 1 },
            { texto: "Escucho pero cambio de tema pronto", empatia: 1, respeto: 1 },
            { texto: "Me siento incómodo y evito esas conversaciones", empatia: 0, respeto: 0 }
        ]
    },
    {
        pregunta: "¿Cómo manejas el dinero cuando sales con amigos?",
        opciones: [
            { texto: "A veces invito, a veces me invitan", generosidad: 2, justicia: 2 },
            { texto: "Trato de que otros paguen si puedo", generosidad: 0, honestidad: 0 },
            { texto: "Siempre pago mi parte exacta", justicia: 3, honestidad: 2 },
            { texto: "Prefiero no salir si cuesta dinero", honestidad: 1, responsabilidad: 1 }
        ]
    },
    {
        pregunta: "¿Qué haces cuando alguien te pide ayuda con algo que no sabes hacer?",
        opciones: [
            { texto: "Digo que sí e intento averiguarlo después", honestidad: 1, generosidad: 2 },
            { texto: "Miento y digo que no tengo tiempo", honestidad: 0, generosidad: 0 },
            { texto: "Le digo que busque a alguien más", honestidad: 2, humildad: 1 },
            { texto: "Admito que no sé pero trato de ayudar de otra forma", honestidad: 3, humildad: 3, generosidad: 2 },
        ]
    },
    {
        pregunta: "¿Cómo reaccionas cuando alguien tiene más éxito que tú?",
        opciones: [
            { texto: "Me alegro por su éxito y trato de aprender", gratitud: 2, humildad: 3, generosidad: 2 },
            { texto: "Siento un poco de envidia pero lo felicito", honestidad: 2, respeto: 2 },
            { texto: "Pienso que tuvo suerte", humildad: 0, gratitud: 0 },
            { texto: "Me molesto y trato de competir", humildad: 0, tolerancia: 0 }
        ]
    },
    {
        pregunta: "¿Cómo actúas cuando tienes que esperar mucho tiempo en una fila?",
        opciones: [
            { texto: "Me molesto pero no digo nada", tolerancia: 1, respeto: 1 },
            { texto: "Me quejo con otros que están esperando", tolerancia: 0, respeto: 0 },
            { texto: "Espero pacientemente mi turno", tolerancia: 3, respeto: 2 },
            { texto: "Trato de buscar formas de adelantarme", justicia: 0, respeto: 0 }
        ]
    },
    {
        pregunta: "¿Qué haces cuando te das cuenta que tienes razón en una discusión?",
        opciones: [
            { texto: "Explico mi punto de vista con respeto", respeto: 3, humildad: 2, tolerancia: 2 },
            { texto: "Insisto hasta que admitan que tengo razón", respeto: 0, humildad: 0 },
            { texto: "Dejo que crean lo que quieran", tolerancia: 2, humildad: 2 },
            { texto: "Me siento superior y lo demuestro", humildad: 0, respeto: 0 }
        ]
    },
    {
        pregunta: "¿Cómo te sientes cuando tienes que pedir disculpas?",
        opciones: [
            { texto: "Me cuesta pero lo hago si es necesario", honestidad: 2, humildad: 2 },
            { texto: "Lo hago sinceramente porque es lo correcto", honestidad: 3, humildad: 3, respeto: 2 },
            { texto: "Solo pido disculpas si me obligan", honestidad: 1, humildad: 1 },
            { texto: "Prefiero evitar la situación", honestidad: 0, humildad: 0 }
        ]
    }
];

// Variables del quiz
var preguntaActual = 0;
var puntuaciones = {};
var respuestas = [];

// Elementos del DOM
var questionContainer = document.getElementById('question-container');
var resultsContainer = document.getElementById('results-container');
var questionText = document.getElementById('question-text');
var optionsContainer = document.getElementById('options-container');
var nextBtn = document.getElementById('next-btn');
var questionCounter = document.getElementById('question-counter');
var progressFill = document.getElementById('progress-fill');
var restartBtn = document.getElementById('restart-btn');

// Inicializar puntuaciones
function inicializarPuntuaciones() {
    puntuaciones = {
        honestidad: 0,
        respeto: 0,
        responsabilidad: 0,
        empatia: 0,
        justicia: 0,
        generosidad: 0,
        perseverancia: 0,
        gratitud: 0,
        tolerancia: 0,
        humildad: 0
    };
}

// Inicializar el quiz
function iniciarQuiz() {
    preguntaActual = 0;
    respuestas = [];
    inicializarPuntuaciones();
    
    questionContainer.style.display = 'block';
    resultsContainer.style.display = 'none';
    
    mostrarPregunta();
}

// Mostrar pregunta actual
function mostrarPregunta() {
    var pregunta = preguntas[preguntaActual];
    
    questionCounter.textContent = 'Pregunta ' + (preguntaActual + 1) + ' de ' + preguntas.length;
    questionText.textContent = pregunta.pregunta;
    
    // Actualizar barra de progreso
    var progreso = ((preguntaActual + 1) / preguntas.length) * 100;
    progressFill.style.width = progreso + '%';
    
    // Limpiar opciones anteriores
    optionsContainer.innerHTML = '';
    
    // Crear opciones
    for (var i = 0; i < pregunta.opciones.length; i++) {
        var opcionDiv = document.createElement('div');
        opcionDiv.className = 'option';
        opcionDiv.innerHTML = '<input type="radio" name="respuesta" value="' + i + '" id="opcion' + i + '">' +
                             '<div class="option-text">' + pregunta.opciones[i].texto + '</div>';
        
        opcionDiv.onclick = function() {
            seleccionarOpcion(this);
        };
        
        optionsContainer.appendChild(opcionDiv);
    }
    
    nextBtn.disabled = true;
}

// Seleccionar opción
function seleccionarOpcion(elemento) {
    // Remover selección previa
    var opciones = document.querySelectorAll('.option');
    for (var i = 0; i < opciones.length; i++) {
        opciones[i].classList.remove('selected');
    }
    
    // Seleccionar nueva opción
    elemento.classList.add('selected');
    
    // Marcar radio button
    var radioButton = elemento.querySelector('input[type="radio"]');
    radioButton.checked = true;
    
    // Habilitar botón siguiente
    nextBtn.disabled = false;
}

// Siguiente pregunta
function siguientePregunta() {
    var respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
    
    if (respuestaSeleccionada) {
        var indiceRespuesta = parseInt(respuestaSeleccionada.value);
        var opcionSeleccionada = preguntas[preguntaActual].opciones[indiceRespuesta];
        
        // Guardar respuesta
        respuestas.push(indiceRespuesta);
        
        // Actualizar puntuaciones
        for (var valor in opcionSeleccionada) {
            if (valor !== 'texto' && puntuaciones[valor] !== undefined) {
                puntuaciones[valor] += opcionSeleccionada[valor];
            }
        }
        
        preguntaActual++;
        
        if (preguntaActual < preguntas.length) {
            mostrarPregunta();
        } else {
            mostrarResultados();
        }
    }
}if (preguntaActual < preguntas.length) {
            mostrarPregunta();
        } else {
            mostrarResultados();
        }
        
// Mostrar resultados
function mostrarResultados() {
    questionContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    // Convertir puntuaciones a array
    var valoresArray = [];
    for (var valor in puntuaciones) {
        valoresArray.push({
            nombre: valor,
            puntuacion: puntuaciones[valor],
            descripcion: valores[valor]
        });
    }
    
    // Ordenar por puntuación descendente
    valoresArray.sort(function(a, b) {
        return b.puntuacion - a.puntuacion;
    });
    
    // Mostrar valores más fuertes (top 3)
    var strongestContainer = document.getElementById('strongest-values');
    strongestContainer.innerHTML = '';
    
    for (var i = 0; i < 3; i++) {
        if (valoresArray[i]) {
            var valueDiv = document.createElement('div');
            valueDiv.className = 'value-item strong';
            valueDiv.innerHTML = '<div class="value-name">' + valoresArray[i].descripcion + '</div>' +
                                '<div class="value-score">Puntuación: ' + valoresArray[i].puntuacion + '</div>';
            strongestContainer.appendChild(valueDiv);
        }
    }
    
    // Mostrar valores más débiles (últimos 3)
    var weakestContainer = document.getElementById('weakest-values');
    weakestContainer.innerHTML = '';
    
    var ultimos3 = valoresArray.slice(-3);
    for (var i = ultimos3.length - 1; i >= 0; i--) {
        var valueDiv = document.createElement('div');
        valueDiv.className = 'value-item weak';
        valueDiv.innerHTML = '<div class="value-name">' + ultimos3[i].descripcion + '</div>' +
                            '<div class="value-score">Puntuación: ' + ultimos3[i].puntuacion + '</div>';
        weakestContainer.appendChild(valueDiv);
    }

    // Preparar datos para enviar
    const datosParaEnviar = {
        puntuaciones: puntuaciones,
        respuestas: respuestas
    };

    // Enviar datos al servidor
    fetch('registro.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(datosParaEnviar)
    })
    .then(response => response.text())
    .then(mensaje => {
        console.log("Respuesta del servidor:", mensaje);
        alert("Tus resultados se han guardado correctamente.");
    })
    .catch(error => {
        console.error("Error al guardar resultados:", error);
        alert("Error al guardar tus resultados. Intenta de nuevo.");
    });
}



// Event listeners
nextBtn.addEventListener('click', siguientePregunta);
restartBtn.addEventListener('click', iniciarQuiz);

// Iniciar el quiz al cargar la página
iniciarQuiz();
