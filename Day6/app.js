let verduras = [];
let frutas = [];
let lacteos = [];
let golosinas = [];
let congelados = [];
let aseo = [];
let agregar = "s";
let producto = "";
let categoria = "";

while (agregar !== "n") {
    agregar = prompt("¿Deseas agregar un producto a la lista de las compras?: s/n ");
    while (agregar !== "s" && agregar !== "n") {
        alert("Instrucción no reconocida!");
        agregar = prompt("¿Deseas agregar un producto a la lista de las compras?: s/n ");
    }

    if (agregar === "n") {
        break;
    }

    producto = prompt("¿Qué producto deseas agregar?: ");
    categoria = prompt("¿A qué categoría corresponde?: Verduras 'v', Frutas 'f', Lácteos 'l', Golosinas 'g', Congelados 'c', Aseo 'a'?: ");

    if (categoria === 'v') {
        verduras.push(producto);
    } else if (categoria === 'f') {
        frutas.push(producto);
    } else if (categoria === 'l') {
        lacteos.push(producto);
    } else if (categoria === 'g') {
        golosinas.push(producto);
    } else if (categoria === 'c') {
        congelados.push(producto);
    } else if (categoria === 'a') {
        aseo.push(producto);
    } else {
        alert("La categoría no está definida...");
    }
}

// Mostrar la lista final
let listaFinal = `
Tu lista de compras: 

Verduras: ${verduras.join(", ")} 
Frutas: ${frutas.join(", ")}
Lácteos: ${lacteos.join(", ")}
Golosinas: ${golosinas.join(", ")}
Congelados: ${congelados.join(", ")}
Aseo: ${aseo.join(", ")}
`;

alert(listaFinal);

// Opción para eliminar un producto
let eliminar = "s";

while (eliminar !== "n") {
    eliminar = prompt("¿Deseas eliminar un producto de la lista?: s/n ");
    while (eliminar !== "s" && eliminar !== "n") {
        alert("Instrucción no reconocida!");
        eliminar = prompt("¿Deseas eliminar un producto de la lista?: s/n ");
    }

    if (eliminar === "n") {
        break;
    }

    let productoEliminar = prompt("¿Qué producto deseas eliminar? (Escribe el nombre del producto): ");
    
    // Función para eliminar el producto de cada categoría
    const eliminarProducto = (producto) => {
        if (verduras.includes(producto)) {
            verduras = verduras.filter(item => item !== producto);
        } else if (frutas.includes(producto)) {
            frutas = frutas.filter(item => item !== producto);
        } else if (lacteos.includes(producto)) {
            lacteos = lacteos.filter(item => item !== producto);
        } else if (golosinas.includes(producto)) {
            golosinas = golosinas.filter(item => item !== producto);
        } else if (congelados.includes(producto)) {
            congelados = congelados.filter(item => item !== producto);
        } else if (aseo.includes(producto)) {
            aseo = aseo.filter(item => item !== producto);
        } else {
            alert("El producto no se encontró en la lista.");
        }
    };

    eliminarProducto(productoEliminar);

    // Mostrar la lista actualizada
    listaFinal = `
Lista de compras actualizada: 

Verduras: ${verduras.join(", ")} 
Frutas: ${frutas.join(", ")}
Lácteos: ${lacteos.join(", ")}
Golosinas: ${golosinas.join(", ")}
Congelados: ${congelados.join(", ")}
Aseo: ${aseo.join(", ")}
`;

    alert(listaFinal);
}
