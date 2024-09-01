let verduras = [];
let frutas = [];
let lacteos = [];
let golosinas = [];
let congelados = [];
let aseo = [];
let producto = "";
let categoria = "";
let agregar = "s";

while (agregar !== "n"){
    agregar = prompt("Deseas agregar un producto a la lista de las compras?: s/n ");
    while (agregar !== "s" && agregar !== "n"){
        alert("Instrucción no reconocida!");
        agregar = prompt("Deseas agregar un producto a la lista de las compras?: s/n ");
    }

    if (agregar === "n"){
        break;
    }

    producto = prompt("¿Qué producto deseas agregar?: ");
    categoria = prompt("¿A qué categoría corresponde?: Verduras 'v', Frutas 'f', Lácteos 'l', Golosinas 'g', Congelados 'c', Aseo 'a'?: ");
    
    if (categoria === 'v'){
        verduras.push(producto);
    }
        else if (categoria === 'f'){
            frutas.push(producto);
        }
            else if (categoria === 'l'){
                lacteos.push(producto);
            }
                else if (categoria === 'g'){
                    golosinas.push(producto);
                }
                    else if (categoria === 'c'){
                        congelados.push(producto);
                    }
                        else if (categoria === 'a'){
                            aseo.push(producto);
                        }
    else {
        alert("La categoria no está definida...");
    }
}
alert(`Tu lista de compras: \nVerduras: ${verduras.join(", ")} \nFrutas: ${frutas.join(", ")}\nLácteos: ${lacteos.join(", ")}\nGolosinas: ${golosinas.join(", ")}\nCongelados: ${congelados.join(", ")}\nAseo: ${aseo.join(", ")}`);
