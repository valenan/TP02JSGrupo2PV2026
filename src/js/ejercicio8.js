const notas = [4, 5, 7, 9, 10, 6, 7, 8, 5, 2];

function procesarNotas(lista) {
    let aprobadas = [];
    let desaprobadas = [];
    let suma = 0;

    for (let i = 0; i < lista.length; i++) {
        console.log(`Nota: ${lista[i]}`);
        
        suma += lista[i];

        if (lista[i] >= 6) {
            aprobadas.push(lista[i]);
        } else {
            desaprobadas.push(lista[i]);
        }
    }

    let promedio = suma / lista.length;

    console.log(`Notas aprobadas: ${aprobadas}`);
    console.log(`Notas desaprobadas: ${desaprobadas}`);
    console.log(`Promedio general: ${promedio}`);
    console.log(`Cantidad de notas aprobadas: ${aprobadas.length}`);
}

procesarNotas(notas);
