export const obtenerTexto = (texto) => {
    if (texto.trim() === "") {
        return "El texto aparecerá aquí...";
    }
    return texto;
};