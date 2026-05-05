export const actualizarTexto = (idElemento, nuevoContenido) => {
    const elemento = document.getElementById(idElemento);
    if (elemento) {
        elemento.textContent = nuevoContenido;
    }
};