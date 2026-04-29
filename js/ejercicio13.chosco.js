const cantidad = parseInt(prompt("¿Cuantos numeros desea ingresar?"));

let numeros = [];

for (let i = 0; i < cantidad; i++) {
    let numero = parseFloat(prompt(`Ingrese el numero ${i + 1}:`));
    numeros.push(numero);
}
// funcion flecha
const mostrarArreglo = (arreglo) => {
    console.log("Números ingresados:");

    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }
};

mostrarArreglo(numeros);