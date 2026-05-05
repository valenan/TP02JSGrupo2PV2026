const opciones = document.querySelectorAll('input[name="lenguaje"]');
const textoSalida = document.getElementById('seleccionado');

opciones.forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.checked) {
            const valor = radio.value;
            textoSalida.textContent = valor;
            console.log("El usuario seleccionó: " + valor);
        }
    });
});