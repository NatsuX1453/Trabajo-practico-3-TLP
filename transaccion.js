function transaccion(valorPesos) {
    let valorDolares=(valorPesos/1175);
    return valorDolares;
}
let valorPesos;
let valorDolares;
let history = []; 
do {
    mensaje = prompt("Menu principal\n1. Ingresar transacción\n2. Salir");
    switch (mensaje) {
        case "1":
            valorPesos = parseInt(prompt("Ingrese el valor de la transacción en pesos"));
            valorDolares = transaccion(valorPesos).toFixed(2);
            alert("El valor en dólares es: $" + valorDolares);
            history.push({
                pesos: valorPesos,
                dolares: valorDolares
            });
            console.log("Historial actualizado:", history);
            break;
        case "2":
            alert("Gracias por usar el sistema");
            break;
        default:
            alert("Opción no válida");
            break;
    }
} while (mensaje !== "2");