function calcularPromedio() {
    let cantidad = parseInt(prompt("¿Cuántos números desea ingresar?"));
    let numeros = [];
    let suma = 0;

    for (let i = 0; i < cantidad; i++) {
        let num = parseInt(prompt("Ingrese el número entero " + (i + 1) + ":"));
        numeros.push(num);
        suma = suma + num;
    }

    let promedio = suma / cantidad;

    document.write(`<p>Los números ingresados son: ${numeros.join(" - ")}</p>`);
    document.write(`<p>El promedio total es: ${promedio}</p>`);
}

calcularPromedio();