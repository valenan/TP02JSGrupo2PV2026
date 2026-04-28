const inicio = parseInt(prompt("Ingrese el número inicial:"));
const fin = parseInt(prompt("Ingrese el número final:"));
const sumarRango = (numeroInicial, numeroFinal) => {
    let suma = 0;

    for (let i = numeroInicial; i <= numeroFinal; i++) {
        suma += i;
    }

    return suma;
};