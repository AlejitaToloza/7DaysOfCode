let s;
let r;
let m;
let d;
var num1 = 0;
var num2 = 0;
var total = 0;
let operacion;

operacion = prompt("Qué operación desea realizar?: Suma 's', Resta 'r', Multiplicación 'm', División 'd' o Salir 'x'?: ");

switch (operacion){
    case "s":
        num1 = parseInt(prompt("Digite el primer número: "));
        num2 = parseInt(prompt("Digite el segundo número: "));
        total = num1 + num2;
        alert('El resultado de la suma es: '+total);
    break;

    case "r":
        num1 = prompt("Digite el primer número: ");
        num2 = prompt("Digite el segundo número: ");
        total = num1 - num2;
        alert('El resultado de la resta es: '+total);
    break;

    case "m":
        num1 = prompt("Digite el primer número: ");
        num2 = prompt("Digite el segundo número: ");
        total = num1 * num2;
        alert('El resultado de la multiplicación es: '+total);
    break;

    case "d":
        num1 = prompt("Digite el primer número: ");
        num2 = prompt("Digite el segundo número: ");
        total = num1 / num2;
        alert('El resultado de la división es: '+total);
    break;

    case "x":
    break;
}
