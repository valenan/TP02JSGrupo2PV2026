function contarLetraA(texto) {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === 'a') {
            contador = contador + 1;
        }
    }

    return contador;
}

let fraseEjemplo = "Estamos programando en Javascript para la facultad";
let resultado = contarLetraA(fraseEjemplo);

console.log("Frase: " + fraseEjemplo);
console.log("La letra 'a' aparece: " + resultado + " veces");