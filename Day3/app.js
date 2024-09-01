const area = prompt("¿Quieres seguir en el área de 'Front-End' o 'Back-End'? Escribe F o B según el área: ");
let lenguaje = "";
if (area === "F") {
    lenguaje = prompt("¿Quieres aprender React o Vue? ");
} else if (area === "B") {
    lenguaje = prompt("¿Quieres aprender C# o Java? ");
} else {
    alert("¡No ingresaste un área válida!");
}

const especialidadOFullstack = prompt("Escribe 1 para seguir especializándote en el área elegida o 2 para desarrollarte y convertirte en Fullstack");
if (especialidadOFullstack == 1) {
    alert("¡Sigue especializándote en " +lenguaje+" para dominar el área de" +area+ "!");
} else if (especialidadOFullstack == 2) {
    alert("¡Es hora de comenzar a aprender otros lenguajes además de "+lenguaje+" si quieres convertirte en Fullstack!");
} else {
    alert("¡No ingresaste un valor válido!");
}

let mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.");
while (mensaje === "ok") {
    let nuevaTecnología = prompt("¿Cuál? ");
    alert(`¡${nuevaTecnología} es realmente una tecnología muy interesante!`);
    mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.");
}