const maximo = 10;
const minimo = 1;
const aleatorio = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
let intento = "";
let acierto = false;
console.log(aleatorio);

for (let i=1; i <= 3; i++)
{
    intento = prompt("Intenta adivinar un número entre 1 y 10: ");
        if (intento == aleatorio){
            alert("Haz adivinado el número: "+aleatorio+" en "+i+" intentos");
            acierto = true;
            break;
        }
        else{
            alert("Número incorrecto!");
        }
}
alert ("El número era "+aleatorio);
