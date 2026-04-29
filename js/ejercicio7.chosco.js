const nombres = ["Lucas", "Martina", "Sofia", "Alejandro", "Valentina", "Juan"];

console.log("Lista de nombres: "); 

for (let i = 0; i < nombres.length; i++) {
    console.log(`${i + 1}. ${nombres[i]}`);
}

let nombreMasLargo = nombres[0];

for (let i = 1; i < nombres.length; i++) {
    if (nombres[i].length > nombreMasLargo.length) {
        nombreMasLargo = nombres[i];
    }
}

console.log(`El nombre mas largo es: ${nombreMasLargo}`);