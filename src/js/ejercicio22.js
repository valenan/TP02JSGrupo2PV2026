import { obtenerTexto } from "../services/service22.js";

const input = document.getElementById("entradaTexto");
const salida = document.getElementById("salidaTexto");

input.addEventListener("input", () => {
    const texto = input.value;

    const resultado = obtenerTexto(texto);

    salida.textContent = resultado;
});