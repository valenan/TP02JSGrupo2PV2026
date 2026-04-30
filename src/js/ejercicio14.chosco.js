const cantidad = parseInt(prompt("¿Cuantos numeros desea ingresar?"));

let numeros = [];

for (let i = 0; i < cantidad; i++) {
    let numero = parseFloat(prompt(`Ingrese el numero ${i + 1}:`));
    numeros.push(numero);
}
const duplicar = (arreglo) => {
    let nuevoArreglo = [];

    for (let i = 0; i < arreglo.length; i++) {
        nuevoArreglo.push(arreglo[i] * 2);
    }

    return nuevoArreglo;
};

const resultado = duplicar(numeros);

console.log(`Arreglo original: ${numeros}`);
console.log(`Arreglo duplicado: ${resultado}`);