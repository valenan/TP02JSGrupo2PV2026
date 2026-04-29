const inicio = parseInt(prompt("Ingrese el número inicial:"));
const fin = parseInt(prompt("Ingrese el número final:"));
const sumarRango = (numeroInicial, numeroFinal) => {
    let suma = 0;

    for (let i = numeroInicial; i <= numeroFinal; i++) {
        suma += i;
    }

    return suma;
};
if (inicio <= fin) {
    const resultado = sumarRango(inicio, fin);
    console.log(`La suma desde ${inicio} hasta ${fin} es: ${resultado}`);
} else {
    console.log("El numero inicial debe ser menor o igual al numero final.");
}