const nombre = prompt ("¿Cuál es tu nombre? ");
const edad = prompt("¿Cuántos años tienes? ");
const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando? ");

alert("Bienvenido "+nombre+ ", tienes "+edad+" años y ya estás aprendiendo "+lenguaje+". Felicidades!!");

/*OPCIONAL

¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.
Y luego, dependiendo de la respuesta, debería mostrar uno de los siguientes mensajes:

1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.
2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?*/

const gusto = prompt("¿Te gusta estudiar "+lenguaje+"? Responde con el número 1 para SÍ o 2 para NO.");
if (gusto==1){
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} 
    else {
        const otro = prompt ("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes? Responde con el número 1 para SÍ o 2 para NO.");
        if (otro == 1){
            alert("Muy bien sigue aprendiendo!!");
        }
        else {
            alert("Busca algo que te apasione, aprendelo y eso te hará feliz...");
        }
    }
