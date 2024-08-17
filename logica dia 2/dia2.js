document.getElementById('iniciar').addEventListener('click', function() {
    // Capturar y almacenar valores dentro de variables
    let name = prompt('¿Cuál es tu nombre?');
    let age = prompt('¿Cuántos años tienes?');
    let languaje = prompt('¿Qué lenguaje de programación estás estudiando?');
    let opcion = prompt(`¿Te gusta estudiar ${languaje}? Responde con el número 1 para SÍ o 2 para NO.`);

    // Construcción del resultado basado en la interacción del usuario
    let resultado = `Hola ${name}, tienes ${age} años y ya estás aprendiendo ${languaje}!`;

    if (opcion == 1) {
        resultado += ' ¡Muy bien! Sigue estudiando y tendrás mucho éxito.';
    } else {
        resultado += ' Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?';
    }

    // Mostrar el resultado en el elemento con id "result"
    document.getElementById('result').textContent = resultado;

    // Mostrar el botón "Reiniciar" y ocultar el botón "Comenzar"
    document.getElementById('iniciar').style.display = 'none';
    document.getElementById('reiniciar').style.display = 'block';
});

function reiniciar() {
    // Vaciar el contenido del resultado
    document.getElementById('result').textContent = '';

    // Ocultar el botón "Reiniciar" y mostrar el botón "Comenzar"
    document.getElementById('reiniciar').style.display = 'none';
    document.getElementById('iniciar').style.display = 'block';
}

// Añadir el evento al botón "Reiniciar" para que ejecute la función reiniciar
document.getElementById('reiniciar').addEventListener('click', reiniciar);
