const cantidad = parseInt(prompt("¿Cuantos numeros desea ingresar?"));

let numeros = [];

for (let i = 0; i < cantidad; i++) {
    let numero = parseFloat(prompt(`Ingrese el numero ${i + 1}:`));
    numeros.push(numero);
}