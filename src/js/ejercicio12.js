const verificarParImpar = () => {
    let numero = parseInt(prompt("Ingrese un número:"));

    if (numero % 2 === 0) {
        document.write(`El número ${numero} es par.`);
    } else {
        document.write(`El número ${numero} es impar.`);
    }
};

verificarParImpar();