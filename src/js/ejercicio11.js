function calcularConsumo() {
    let kilometros = parseFloat(prompt("Ingrese los kilómetros recorridos:"));
    let litros = parseFloat(prompt("Ingrese los litros de combustible consumidos:"));

    let consumo = litros / kilometros;

    document.write("<h1>Resumen de Consumo de Combustible</h1>");
    document.write("<p>Distancia: " + kilometros + " km</p>");
    document.write("<p>Combustible: " + litros + " l</p>");
    document.write("<p>El consumo es de: <strong>" + consumo + "</strong> litros por kilómetro.</p>");
}

calcularConsumo();