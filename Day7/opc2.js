let s;
let r;
let m;
let d;
let x;
var num1 = 0;
var num2 = 0;
var total = 0;
let operacion="";

while (operacion !== "x"){
    operacion = prompt("Qué operación desea realizar?: Suma 's', Resta 'r', Multiplicación 'm', División 'd' o Salir 'x'?: ");

    if(operacion === "x"){
        break;
    }

    while (operacion !== 's' && operacion !== 'r' && operacion !== 'm' && operacion !== 'd'){
        alert("Instrucción no reconocida!");
        operacion = prompt("Qué operación desea realizar?: Suma 's', Resta 'r', Multiplicación 'm', División 'd' o Salir 'x'?: ");
    
        if(operacion === "x"){
            break;
        }
    }

    if(operacion === "x"){
        break;
    }
  
    if (operacion === 's'){
            num1 = parseInt(prompt("Digite el primer número: "));
            num2 = parseInt(prompt("Digite el segundo número: "));
            total = num1 + num2;
            alert('El resultado de la suma es: '+total);
    }
        else if(operacion === 'r'){
                num1 = parseInt(prompt("Digite el primer número: "));
                num2 = parseInt(prompt("Digite el segundo número: "));
                total = num1 - num2;
                alert('El resultado de la resta es: '+total);
        }
            else if(operacion === 'm'){
                num1 = parseInt(prompt("Digite el primer número: "));
                num2 = parseInt(prompt("Digite el segundo número: "));
                total = num1 * num2;
                alert('El resultado de la multiplicación es: '+total);
            }
        
                else if(operacion === 'd'){
                    num1 = parseInt(prompt("Digite el primer número: "));
                    num2 = parseInt(prompt("Digite el segundo número: "));
                    total = num1 / num2;
                    alert('El resultado de la división es: '+total);
                }
    else {
        alert("La operación no está definida...");
    }
}
